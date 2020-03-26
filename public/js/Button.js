
// button base class
class Button {
    constructor(offset, widthOfContainer, heightOfContainer, row, index, lenButtons){
        // True = row, False = column
        this.orientation = row;
        // the number of buttons in the container
        this.lenOfButtons = lenButtons;
        // index of this button
        this.index = index;

        // the placement of the button on the canvas based on the orientation
            //  and the bounds of the container.
        if (this.orientation){
            this.x = index * widthOfContainer / lenButtons + (widthOfContainer/(lenButtons*2));
            this.y = heightOfContainer - (heightOfContainer / 5);
        } else {
            this.x = widthOfContainer / 2;
            this.y = offset + index * heightOfContainer / lenButtons;
        }

        this.width = 20;
        this.height = 20;
        this.borderRadius = 40;
        this.mouseOver = false;
        this.color = 'black';
        this.mouseOverColor = 'blue';
    }

    performClickFunctionality(){
            // do function
            console.log(this.index);
    }

    testForClick(clickLocation){
        if (clickLocation.x > this.x - this.borderRadius
            && clickLocation.x < this.x + this.borderRadius
            && clickLocation.y > this.y - this.borderRadius
            && clickLocation.y < this.borderRadius + this.y){
            return true;
        }
    }

    testForMouseOver(mouseX, mouseY){
        if (mouseX > this.x - this.borderRadius
            && mouseX < this.x + this.borderRadius
            && mouseY > this.y - this.borderRadius
            && mouseY < this.borderRadius + this.y){
                return true
        } else {
            return false
        }
    }
    
    draw(){
    // need to delay the check on this as well as abstract away the functionality.
        // not all buttons will change color on mouseover.
    if (this.testForMouseOver(mouseX, mouseY)){
        fill(this.mouseOverColor);
    } else {
        fill(this.color);
    }
      noStroke();
      rect(this.x, this.y, this.width, this.height, this.borderRadius);
    }
}

class CreateSnapShotButton extends Button{
    constructor(offset, widthOfContainer, heightOfContainer, row, index, lenButtons){
        super(offset, widthOfContainer, heightOfContainer, row, index, lenButtons);
    }

    performClickFunctionality(){
        // super.performClickFunctionality()
        console.log("you clicked the CreateSnapShotButton")
    }
}

class AboutButton extends Button{
    constructor(offset, widthOfContainer, heightOfContainer, row, index, lenButtons){
        super(offset, widthOfContainer, heightOfContainer, row, index, lenButtons);
    }

    performClickFunctionality(){
        // super.performClickFunctionality()
        console.log("you clicked the AboutButton")
    }
}


class RefreshButton extends Button{
    constructor(offset, widthOfContainer, heightOfContainer, row, index, lenButtons){
        super(offset, widthOfContainer, heightOfContainer, row, index, lenButtons);
    }

    performClickFunctionality(){
        // super.performClickFunctionality()
        console.log("you clicked the RefreshButton")
    }
}

class InspectSnapShotButton extends Button{
    constructor(offset, widthOfContainer, heightOfContainer, row, index, lenButtons){
        super(offset, widthOfContainer, heightOfContainer, row, index, lenButtons);
    }

    performClickFunctionality(){
        // super.performClickFunctionality()
        console.log("you clicked the InspectSnapShotButton")
    }
}

/*

ALL buttons should...
    be able to orient themselves:
        row or column?
        which index in the list of buttons?
        what's the scope of their container / bounds?
    have reaction effects to show interactivity:
        effect on mouseover
        effect on click
    have functionality:
        function on click

individual buttons should...
    know how big or small they should be based on the the container size
    how they look, their "icon":
        if it's a snapshot, it will contain a minified, frozen Grid and Cell classes.
        if it's another type of button it will contain an approipriate p5.js icon.
    implement their specific functionality.

what info to pass in?
    container / bounds info:
        width
        height
    index of button (out of buttons):
        0 to n-1
    row or colum:
        boolean

*/

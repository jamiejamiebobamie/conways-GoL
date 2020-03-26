class Button {
    constructor(canvasWidth, canvasHeight){
        this.height = canvasWidth/5;
        this.width = canvasWidth/5;
        this.x = canvasWidth/2 - canvasWidth/10;
        this.y = canvasHeight - canvasHeight/5;
        this.borderRadius = 40;
    }

    // https://p5js.org/examples/instance-mode-instance-container.html
    // https://p5js.org/reference/#/p5/saveCanvas
    draw(){
      fill(240);
      noStroke();
      rect(this.x, this.y, this.width, this.height, this.borderRadius);
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

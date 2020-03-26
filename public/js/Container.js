function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

class Container{

    constructor(y, length, widthOfCanvas){
        this.startingY = y;
        this.width = widthOfCanvas;
        this.length = length;
        this.randomColor = (getRandomInt(256))
    }

    draw(){
        fill(this.randomColor);
        rect(0,this.startingY,this.width,this.length)
    }

    getEndingY(){
        return this.startingY + this.length;
    }
}

/*

ALL containers should...
    have a starting location on the canvas (where to begin):
        x (FIXED: 0)
        y
    have a width (FIXED: length of the canvas)
    have a length (how far down the canvas the container extends)
    have a draw() function to draw the items contained in the container
    have a method that returns where the container ends:
        startingLocation.y + length of container
    a method to recreateSelf() when the window is resized.

individual containers should...
    the snapshotContainer needs to extend its length with every snapshot
        and inform the canvas that the canvas needs to extend itself as well

what info to pass in?
    starting location:
        y
    container / bounds info:
        length


*/

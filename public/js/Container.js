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

    recreate(widthOfCanvas, heightOfCanvas){
            this.width = widthOfCanvas;
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
// let canvasDivisorWidth = 15;
// let canvasDivisorHeight = 5;
// widthOfCanvas = windowWidth - windowWidth / canvasDivisorWidth;
// // need to scale the height of elements based on the windowWidth
// heightOfCanvas = windowWidth - windowWidth / canvasDivisorHeight

class GridContainer extends Container{
    constructor(y, length, widthOfCanvas, heightOfCanvas){
        super(y, length, widthOfCanvas);
        this.grid = new Grid(widthOfCanvas, heightOfCanvas);
        this.recreate(widthOfCanvas, heightOfCanvas);
    }

    recreate(widthOfCanvas, heightOfCanvas){
        this.grid = new Grid(widthOfCanvas, heightOfCanvas);
        this.grid.randomizeCellState();
    }

    draw(){
        fill(this.randomColor);
          rect(0,this.startingY,this.width,this.length);
        this.grid.draw();
    }
}

class UIContainer extends Container{
    constructor(y, length, widthOfCanvas, heightOfCanvas){
        super(y, length, widthOfCanvas);
        this.buttons = []
        this.recreate(widthOfCanvas, heightOfCanvas);
    }

    recreate(widthOfCanvas, heightOfCanvas){
        let row = true;
        this.buttons = [];
        let numButtons = this.buttons.length;
        for (let i = 0; i < 3; i++){
            let button = new Button(0,widthOfCanvas, heightOfCanvas, row, i, 3);
            this.buttons.push(button);
        }
    }

    draw(){
        fill(this.randomColor);
          rect(0,this.startingY,this.width,this.length);
          // rect(0,200,200,200);
          // noStroke();

          for (let i = 0; i < 3; i++){
            this.buttons[i].draw();
        }
    }
}

class SnapshotContainer extends Container{
    constructor(y, length, widthOfCanvas, heightOfCanvas){
        super(y, length, widthOfCanvas);
        this.snapshots = []
        this.numSnapshots = 5;
        this.recreate(widthOfCanvas, heightOfCanvas);
    }

    recreate(widthOfCanvas, heightOfCanvas){

        let row = false;
        this.snapshots = [];
        for (let i = 0; i < this.numSnapshots; i++){
            let button = new Button(this.getEndingY(), widthOfCanvas, heightOfCanvas, row, i, this.numSnapshots);
            this.snapshots.push(button);
        }
    }

    draw(){
        fill(this.randomColor);
          rect(0,this.startingY,this.width,this.length);
          for (let i = 0; i < this.numSnapshots; i++){
            this.snapshots[i].draw();
        }
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

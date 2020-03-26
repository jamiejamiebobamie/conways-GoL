
// objects to be instantiated
let canvas;
let grid;
let buttons = []

// testing
let containers = [];
let gridContainer;
let uiContainer;
let snapshotContainer;


// constants that control the size of the p5.js canvas
let canvasDivisorWidth = 15;
let canvasDivisorHeight = 5;
let containerExtension;

// p5.js built-in method
function setup() {
    recreateCanvas();
    canvas.parent('sketch-holder');
    // centers the canvas
    imageMode(CENTER);
}

// p5.js built-in method
function windowResized() {
    recreateCanvas();
}

// p5.js built-in method
function draw () {
  background(256,0,0);
  grid.draw();
  // for (let i = 0; i < buttons.length; i++){
  //     buttons[i].draw();
  // }
    // gridContainer.draw();
    // uiContainer.draw();
    // snapshotContainer.draw();
}

function recreateCanvas(){

    // creating new objects everytime the window is resized is bad.
        // attempted to make getter/setters for the member variables to
        // reset them after initialization, but the code became too nested.

    containers = []
    containerTest1 = new Container(0,20,windowWidth);
    containerTest2 = new Container(containerTest1.getEndingY(),40,windowWidth);
    containerTest3 = new Container(containerTest2.getEndingY(),60,windowWidth);

    containers.push(containerTest1);
    containers.push(containerTest2);
    containers.push(containerTest3);

    containerExtension = 0;
    for (let i = 0; i < containers.length; i++){
        containerExtension+=containers[i].getEndingY();
    }

    let widthOfCanvas = windowWidth - windowWidth / canvasDivisorWidth;
    let heightOfCanvas = containerExtension;
    console.log(heightOfCanvas,containerExtension)
    canvas = createCanvas(widthOfCanvas, heightOfCanvas);

    // row = true;
    // numButtons = 3
    // buttons = []
    // for (let i = 0; i < numButtons; i++){
    //     button = new Button(widthOfCanvas, heightOfCanvas, row, i, numButtons);
    //     buttons.push(button);
    // }
    grid = new Grid(widthOfCanvas, heightOfCanvas);
    grid.randomizeCellState();
}

function addToSnapshots(snapshot){
    colors = grid.returnColors();
}

function mouseClicked() {
    clickLocation = { 'x': mouseX, 'y' : mouseY };
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].testForClick(clickLocation)){
            buttons[i].performClickFunctionality()
        }
    }
}

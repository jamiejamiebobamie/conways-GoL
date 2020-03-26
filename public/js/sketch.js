
// objects to be instantiated
let canvas;
let grid;

// testing
let containers = [];
let gridContainer;
let uiContainer;
let snapshotContainer;

// constants that control the size of the p5.js canvas
let widthOfCanvas;
let heightOfCanvas;
let canvasDivisorWidth = 15;
let canvasDivisorHeight = 5;
let containerExtension;

// p5.js built-in method
function setup() {
    gridContainer = new GridContainer(0,400,windowWidth, windowHeight);
    containers.push(gridContainer);
    uiContainer = new UIContainer(gridContainer.getEndingY(),100,windowWidth, windowHeight);
    containers.push(uiContainer);
    snapshotContainer = new SnapshotContainer(uiContainer.getEndingY(),500,windowWidth, windowHeight);
    containers.push(snapshotContainer);
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
    gridContainer.draw();
    uiContainer.draw();
    snapshotContainer.draw();
}

function recreateCanvas(){

    // creating new objects everytime the window is resized is bad.
        // attempted to make getter/setters for the member variables to
        // reset them after initialization, but the code became too nested.

    // need to scale the height of elements based on the windowWidth
    // heightOfCanvas = windowWidth - windowWidth / canvasDivisorHeight
    // need to scale the heightOfCanvas based on the collective height
        // of all the containers

    widthOfCanvas = windowWidth - windowWidth / canvasDivisorWidth;
    heightOfCanvas = windowWidth - windowWidth / canvasDivisorHeight

    gridContainer.recreate(widthOfCanvas, heightOfCanvas);
    uiContainer.recreate(widthOfCanvas, heightOfCanvas);
    snapshotContainer.recreate(widthOfCanvas, heightOfCanvas);
    containerExtension = 0;
    for (let i = 0; i < containers.length; i++){
        containerExtension+=containers[i].getEndingY();
    }

    heightOfCanvas = containerExtension;
    canvas = createCanvas(widthOfCanvas, heightOfCanvas);
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

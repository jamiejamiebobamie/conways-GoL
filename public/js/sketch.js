
// objects to be instantiated
let canvas;
let grid;
let buttons = []

// constants that control the size of the p5.js canvas
let canvasDivisorWidth = 15;
let canvasDivisorHeight = 5;

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
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
  for (let i = 0; i < buttons.length; i++){
      buttons[i].draw();
  }
}

function recreateCanvas(){
    let widthOfCanvas = windowWidth - windowWidth / canvasDivisorWidth;
    let heightOfCanvas = windowHeight - windowHeight / canvasDivisorHeight;
    canvas = createCanvas(widthOfCanvas, heightOfCanvas);
    // creating new objects everytime the window is resized is bad.
        // attempted to make getter/setters for the member variables to
        // reset them after initialization, but the code became too nested.
    row = true;
    numButtons = 3
    buttons = []
    for (let i = 0; i < numButtons; i++){
        button = new Button(widthOfCanvas, heightOfCanvas, row, i, numButtons);
        buttons.push(button);
    }
    grid = new Grid(widthOfCanvas, heightOfCanvas);
    grid.randomizeCellState();
}

function addToSnapshots(snapshot){
    colors = grid.returnColors();
    // snapshots.push(colors);
}

function mouseClicked() {
    clickLocation = { 'x': mouseX, 'y' : mouseY };
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].testForClick(clickLocation)){
            buttons[i].performClickFunctionality()
        }
    }
}

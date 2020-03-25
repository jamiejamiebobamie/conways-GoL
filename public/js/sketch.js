
// objects to be instantiated
let canvas;
let grid;
let button;
let snapshotContainer;

// constants that control the size of the p5.js canvas
let canvasDivisorWidth = 15;
let canvasDivisorHeight = 5;

// testing
let doAmount = 10;
let doCount = 0;
let snapshots = []

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
  background(256);
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
  button.draw();
  snapshotContainer.draw()
}

function recreateCanvas(){
    let widthOfCanvas = windowWidth - windowWidth / canvasDivisorWidth;
    let heightOfCanvas = windowHeight - windowHeight / canvasDivisorHeight;
    canvas = createCanvas(widthOfCanvas, heightOfCanvas);
    // creating new objects everytime the window is resized is bad.
        // attempted to make getter/setters for the member variables to
        // reset them after initialization, but the code became too nested.
    button = new Button(widthOfCanvas, heightOfCanvas);
    grid = new Grid(widthOfCanvas, heightOfCanvas);
    grid.randomizeCellState();
    snapshotContainer = new SnapshotHolder(widthOfCanvas, heightOfCanvas, snapshots);

    if (doCount < doAmount){
        addToSnapshots();
        doCount++;
    }
}

function addToSnapshots(snapshot){
    colors = grid.returnColors();
    snapshots.push(colors);
    console.log(snapshots)
    }

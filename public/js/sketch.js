
let canvas;
let grid;

// p5.js built-in method
function setup() {
    recreateCanvas();
    canvas.parent('sketch-holder');
    imageMode(CENTER);
}

// p5.js built-in method
function windowResized() {
    recreateCanvas();
}

// p5.js built-in method
function draw () {
  background(250);
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
}

function recreateCanvas(){
    let cellDivisor = 50;
    let gridDivisorWidth = 15;
    let gridDivisorHeight = 20;
    let cellSize;
    let width;
    let height;

    width = windowWidth-windowWidth/gridDivisorWidth;
    height = windowHeight-windowHeight/gridDivisorHeight;

    canvas = createCanvas(width, height);

    if (windowWidth > windowHeight){
        cellSize = windowWidth/cellDivisor;
    } else {
        cellSize = windowHeight/cellDivisor;
    }

    grid = new Grid(width, height, cellSize);

    grid.randomize();
}

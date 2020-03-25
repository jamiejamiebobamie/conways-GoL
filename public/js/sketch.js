// import Grid from './Grid.js';
// import { Cell } from './module.js';

// const Grid = require('./Grid.js');

let grid;
let cellSize;

console.log(Grid);

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    canvas.parent('sketch-holder');
    imageMode(CENTER);

    if (windowWidth > windowHeight){
        cellSize = windowWidth/35
    } else {
        cellSize = windowHeight/35
    }

    grid = new Grid(windowWidth, windowHeight, 40); //20
    grid.randomize();
}

function windowResized() {
    if (windowWidth > windowHeight){
        cellSize = windowWidth/35
    } else {
        cellSize = windowHeight/35
    }
    grid = new Grid(windowWidth, windowHeight, 40); //20
    grid.randomize();
}

function draw () {
  background(250);
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
}

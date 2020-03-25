// import Grid from './Grid.js';
// import { Cell } from './module.js';

// const Grid = require('./Grid.js');

var grid;

console.log(Grid);

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    if (windowWidth < 2000){
        canvas = createCanvas(windowWidth, windowHeight);
    } else {
        canvas = createCanvas(2000, windowHeight);
    }

    canvas.parent('sketch-holder');
    imageMode(CENTER);

    grid = new Grid(100); //20
    grid.randomize();
}

function windowResized() {
    if (windowWidth < 2000){
        resizeCanvas(windowWidth, windowHeight);
    } else {
        resizeCanvas(2000, windowHeight);
    }
}

function draw () {
  background(250);
  grid.updateNeighborCounts();
  grid.updatePopulation();
  grid.draw();
}

class Cell {
  constructor (column, row, cellSize) {

    this.column = column;
    this.row = row;
    this.cellSize = cellSize;
    this.isAlive = false;
    this.liveNeighborCount = 0;
    this.colorR = 10 * this.column;
    this.colorG = 10 * this.row;
    this.colorB = this.column + this.row;
    this.birth = false;


    this.generation_isAlive = [];

    //Initially rewind was meant to be an array that stored this.isAlive per cell each generation, but I couldn't figure out how to play them back with a for loop, despite managing to store them. I tried a number of things...

  }

  setIsAlive (value) {
    if (value === 1) {
      this.isAlive = true;
    } else {
      this.isAlive = false;
    }
  }

  liveOrDie () {
    if (this.isAlive === true && this.liveNeighborCount < 2 || this.isAlive === true && this.liveNeighborCount > 3) {
      this.isAlive = false;
    } else if (this.isAlive === false && this.liveNeighborCount === 3) {
      this.isAlive = true;
      this.birth = true;
      }
    }

  draw () {
    if(this.isAlive === true) {
    fill(color(this.colorR, this.colorG, this.colorB));
    } else {
      fill(240);
    }
    noStroke();
    rect(this.column * this.cellSize + 1, this.row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
  }
}


// exports.Cell = Cell;

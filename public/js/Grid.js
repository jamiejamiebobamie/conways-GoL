class Grid {
    constructor (width, height, cellSize) {
        this.cellSize = cellSize;
        this.numberOfColumns = int( height / this.cellSize);
        this.numberOfRows = int( width / this.cellSize);
        this.cells = new Array(this.numberOfRows);
        for (let i = 0; i < this.numberOfRows; i++) {
            this.cells[i] = new Array(this.numberOfColumns);
        }

            for (var row = 0; row < this.numberOfRows; row++) {
                for (var column = 0; column < this.numberOfColumns; column++) {
                  this.cells[row][column] = new Cell(row,column, cellSize);
            }
        }
        this.currentGeneration = 0;
        this.play = true;
        this.fastForward = false;
        this.rewind = false;
    }

    randomize () {
        this.currentGeneration = 0;
          for (var row = 0; row < this.numberOfRows; row++){
            for (var column = 0; column < this.numberOfColumns; column++) {
                  this.cells[row][column].setIsAlive(floor(random(2)));
                  this.cells[row][column].colorR = 10 * column;
                  this.cells[row][column].colorG = 10 * row;
                  this.cells[row][column].colorB = column + row;
                  this.cells[row][column].generation_isAlive = [];
                  this.cells[row][column].generation_isAlive.push(this.cells[row][column].isAlive);
                }
            }
    }

    isValidPosition (column, row) {
        if(column < this.numberOfColumns && column >= 0 && row < this.numberOfRows && row >=0) {
            return true;
        } else {
            return false;
        }
    }

    getNeighbors (currentCell){
        var neighbors = [];
        for (var xOffset = -1; xOffset <= 1; xOffset++) {
            for (var yOffset = -1; yOffset <= 1; yOffset++) {
                var neighborColumn = currentCell.column + xOffset;
                var neighborRow = currentCell.row + yOffset;
            if(this.isValidPosition(neighborColumn, neighborRow) && xOffset * yOffset + xOffset + yOffset !== 0) {
                neighbors.push(this.cells[neighborRow][neighborColumn]);
              }
            }
        }
        return neighbors;
    }

    updateNeighborCounts () {
        for (var row = 0; row < this.numberOfRows; row++) {
            for (var column = 0; column < this.numberOfColumns; column ++) {
                this.cells[row][column].liveNeighborCount = 0;
                var neighbors = this.getNeighbors(this.cells[row][column]);
                for(var i = 0; i < neighbors.length; i++) {
                 if (neighbors[i].isAlive){
                  this.cells[row][column].liveNeighborCount++;
                    }
                  }
            }
        }
    }

 cellColor () {
   for (var row = 0; row < this.numberOfRows; row++) {
    for (var column = 0; column < this.numberOfColumns; column ++) {
        if(this.cells[row][column].birth === true) {
         var neighbors = this.getNeighbors(this.cells[row][column]);
         for(var i = 0; i < neighbors.length; i++) {
           if(neighbors[i].isAlive === true){
          this.cells[row][column].colorR = this.cells[row][column].colorR + neighbors[i].colorR;
          this.cells[row][column].colorG = this.cells[row][column].colorG + neighbors[i].colorG;
          this.cells[row][column].colorB = this.cells[row][column].colorB + neighbors[i].colorB;
           }
        }
          this.cells[row][column].colorR = this.cells[row][column].colorR / 3.6;
          this.cells[row][column].colorG = this.cells[row][column].colorG / 3.6;
          this.cells[row][column].colorB = this.cells[row][column].colorB / 3.6;

         //dividing by 3 wasn't giving me the colors I wanted. (3.6)

          this.cells[row][column].birth = false;
        }
      }
  }
}

  updatePopulation () {
  if (this.rewind === true && this.currentGeneration >= 1) {
       this.playRewind();
       this.rewind = false;
} else if(this.fastForward === true){
    this.currentGeneration = this.currentGeneration + 1;
    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
      this.cells[column][row].liveOrDie();
      this.cellColor();
    }
   }
  } else if(this.play === true && frameCount % 10 === 0) {
      this.currentGeneration = this.currentGeneration + 1;
    for (this.row = 0; this.row < this.numberOfRows; this.row++) {
    for (this.column = 0; this.column < this.numberOfColumns; this.column ++) {
      this.cells[this.row][this.column].liveOrDie();
      this.cellColor();
    }
  }
  }
}

playRewind () {
 this.currentGeneration = 0;
for (var row = 0; row < this.numberOfRows; row++) {
 for (var column = 0; column < this.numberOfColumns; column ++) {
     this.cells[row][column].isAlive = this.cells[row][column].generation_isAlive[0];
     this.cells[row][column].colorR = 10 * column;
     this.cells[row][column].colorG = 10 * row;
     this.cells[row][column].colorB = column + row;
   }
 }
 }

  draw () {
    for (var row = 0; row < this.numberOfRows; row++) {
        for (var column = 0; column < this.numberOfColumns; column ++) {
       this.cells[row][column].draw();
      }
    }
  }
}

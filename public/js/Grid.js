
let cellDivisor = 25;

class Grid {
    constructor (widthOfCanvas, heightOfCanvas) {
        this.width = widthOfCanvas;
        this.height = heightOfCanvas - heightOfCanvas / 4;

        if (widthOfCanvas > heightOfCanvas){
            this.cellSize = widthOfCanvas/cellDivisor;
        } else {
            this.cellSize = heightOfCanvas/cellDivisor;
        }

        this.numberOfColumns = int( this.width / this.cellSize);
        this.numberOfRows = int( this.height / this.cellSize);

        this.cells = new Array(this.numberOfColumns);
        this.colors = new Array(this.numberOfColumns);
        for (let i = 0; i < this.numberOfColumns; i++) {
            this.cells[i] = new Array(this.numberOfRows);
            this.colors[i] = new Array(this.numberOfRows);
        }

        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
              this.cells[column][row] = new Cell(column, row, this.cellSize);
            }
        }
        this.currentGeneration = 0;
        this.play = true;
        this.fastForward = false;
        this.rewind = false;
    }

    randomizeCellState() {
        this.currentGeneration = 0;
        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
          this.cells[column][row].setIsAlive(floor(random(2)));
          this.cells[column][row].colorR = 10 * column;
          this.cells[column][row].colorG = 10 * row;
          this.cells[column][row].colorB = column + row;
          this.cells[column][row].generation_isAlive = [];
          this.cells[column][row].generation_isAlive.push(this.cells[column][row].isAlive);
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
        neighbors.push(this.cells[neighborColumn][neighborRow]);
          }
        }
      }
      return neighbors;
    }

      updateNeighborCounts () {
        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
            this.cells[column][row].liveNeighborCount = 0;
            var neighbors = this.getNeighbors(this.cells[column][row]);
        for(var i = 0; i < neighbors.length; i++) {
         if (neighbors[i].isAlive){
          this.cells[column][row].liveNeighborCount++;
            }
          }
        }
      }
    }

     cellColor () {
        //dividing by 3 wasn't giving me the colors I wanted:
        let colorDivisor = 3.7;
        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
            if(this.cells[column][row].birth === true) {
             var neighbors = this.getNeighbors(this.cells[column][row]);
             for(var i = 0; i < neighbors.length; i++) {
               if(neighbors[i].isAlive === true){
              this.cells[column][row].colorR = this.cells[column][row].colorR + neighbors[i].colorR;
              this.cells[column][row].colorG = this.cells[column][row].colorG + neighbors[i].colorG;
              this.cells[column][row].colorB = this.cells[column][row].colorB + neighbors[i].colorB;
               }
            }
              this.cells[column][row].colorR = this.cells[column][row].colorR / colorDivisor;
              this.cells[column][row].colorG = this.cells[column][row].colorG / colorDivisor;
              this.cells[column][row].colorB = this.cells[column][row].colorB / colorDivisor;
              this.cells[column][row].birth = false;
            }
          }
      }
    }

      playRewind () {
      this.currentGeneration = 0;
      for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
          this.cells[column][row].isAlive = this.cells[column][row].generation_isAlive[0];
          this.cells[column][row].colorR = 10 * column;
          this.cells[column][row].colorG = 10 * row;
          this.cells[column][row].colorB = column + row;
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
   } else if(this.play === true && frameCount % 1 === 0) {
          this.currentGeneration = this.currentGeneration + 1;
        for (this.column = 0; this.column < this.numberOfColumns; this.column ++) {
          for (this.row = 0; this.row < this.numberOfRows; this.row++) {
          this.cells[this.column][this.row].liveOrDie();
          this.cellColor();
        }
      }
      }
    }

    // isn't it usually rows contains columns...
    returnColors(){
        let color;
        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
           color = this.cells[column][row].returnColor();
           this.colors.push(color);
          }
        }
        return this.colors;
    }

      draw () {
        for (var column = 0; column < this.numberOfColumns; column ++) {
          for (var row = 0; row < this.numberOfRows; row++) {
           this.cells[column][row].draw();
          }
        }
      }
}

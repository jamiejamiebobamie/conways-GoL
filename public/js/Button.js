class Button {
    constructor(canvasWidth, canvasHeight){
        this.height = canvasWidth/5;
        this.width = canvasWidth/5;
        this.x = canvasWidth/2 - canvasWidth/10;
        this.y = canvasHeight - canvasHeight/5;
        this.borderRadius = 40;
    }

    // https://p5js.org/examples/instance-mode-instance-container.html
    // https://p5js.org/reference/#/p5/saveCanvas
    draw(){
      fill(240);
      noStroke();
      rect(this.x, this.y, this.width, this.height, this.borderRadius);
    }

}

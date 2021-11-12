function setup(){
    canvas = createCanvas(500,500);
    canvas.parent(".canvas");
}

function draw(){
    background(204);
    yPos = yPos - 1;
    if (yPos < 0) {
      yPos = height;
    }
    line(0, yPos, width, yPos);
}
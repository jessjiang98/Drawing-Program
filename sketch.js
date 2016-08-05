var red1 = 100;
var blue1 = 50;
var green1 = 150;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(212, 144, 204);
  //rectangle
  fill(255, 255, 255);
  stroke(0, 0, 0, 0);
  rect(displayWidth / 4, displayHeight / 4, 750, 750);
  textSize(36);
  textAlign(CENTER);
  text("Show Off Your Drawing Skills!!", 650, 100);
}

function draw() {
  //pen
  fill(red1, blue1, green1);
  stroke(0, 0, 0, 0);
  ellipse(mouseX, mouseY, 10);
  noStroke();
  fill(0);
  if (mouseIsPressed) {
    fill(255, 255, 255);
  }
  if (mouseIsPressed == false) {
    fill(0, 0, 0);
  }

}
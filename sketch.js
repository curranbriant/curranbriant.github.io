function setup() {
  createCanvas(2000, 627);
}

function draw() {}

function mouseDragged() {
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

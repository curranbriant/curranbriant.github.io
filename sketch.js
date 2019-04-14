function setup() {
  createCanvas(1400, 627);
}

function draw() {}

function mouseDragged() {
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

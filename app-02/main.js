var diameter = 50;
var mx = undefined;
var my = undefined;
var c;

function setup() {
    createCanvas(810,500);
    c = new Circle(width / 2, height / 2, diameter);
}

function draw() {
    background(21);
    c.update();
    c.show();


    if (c.drag) {
        strokeWeight(4);
        stroke(255)
        line(mx, my, mouseX, mouseY);
    }
}

function mousePressed() {
    if (c.mouseInside()) {
        c.setDrag(true);
        mx = c.x;
        my = c.y;
    }
}

function mouseReleased() {
    if (c.drag) {
        c.setDrag(false);
        c.setDirX((mx - mouseX) / 8);
        c.setDirY((my - mouseY) / 8);
    }
}
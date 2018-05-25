var diameter = 50;
var mx = undefined;
var mxHelper = undefined;
var my = undefined;
var myHelper = undefined;
var c;

function setup() {
    createCanvas(810,500);
    c = new Circle(width / 2, height / 2, diameter);
}

function draw() {
    background(21);
    c.update();
    c.show();
}

function mouseDragged() {
    if (c.drag) {
        c.setX(mouseX);
        c.setY(mouseY);

        mx = mxHelper;
        mxHelper = mouseX;
        my = myHelper;
        myHelper = mouseY;
    }
}

function mousePressed() {
    if (c.mouseInside()) {
        c.setDrag(true);
        mx       = mouseX;
        mxHelper = mouseX;
        my       = mouseY;
        myHelper = mouseY;
    }
}

function mouseReleased() {
    if (c.drag) {
        c.setDrag(false);
        c.setDirX(mouseX - mx);
        c.setDirY(mouseY - my);
    }
}
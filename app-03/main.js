var x = [0, 1];
var y = [0, 1];
var multx = -1;
var multy = 1;
var div = 4;
var oldDiv = 0;

function setup() {
    createCanvas(500, 500);
    stroke(255);
    divSlider = createSlider(1, 10, 2);
    divSlider.position(width - 150, height - 15);
    // strokeWeight(2);
}
function draw() {
    div = divSlider.value();

    if (div != oldDiv) {
        oldDiv = div;
        x = [0, 1];
        y = [0, 1];
        multx = -1;
        multy = 1;
    }

    if ((x[x.length-1] < -width || x[x.length-1] > width) &&
        (y[y.length-1] < -height || y[y.length-1] > height)) return;

    background(21);

    multx *= -1;
    multy *= -1;

    x.push((x[x.length-1] + x[x.length-2]/(1 * div)) * multx);
    y.push((y[y.length-1] + y[y.length-2]/(1 * div)) * multy);

    translate(width/2, height/2);
    noFill();
    beginShape();
        for (var i = 0; i < x.length; i++) {
            vertex(x[i], y[i]);
        }
    endShape();
}
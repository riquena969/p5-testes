var h;
var m;
var s;
var ms;

var colourH;
var colourM;
var colourS;

var posH;
var posM;
var posS;
var dirH;
var dirM;
var dirS;

var _fontSize = 28;

function setup() {
    createCanvas(500, 250);
    stroke(255);

    colourH = color(random(255),random(255),random(255));
    colourM = color(random(255),random(255),random(255));
    colourS = color(random(255),random(255),random(255));

    posH = -HALF_PI;
    dirH = random(-0.05, 0.05);

    posM = -HALF_PI;
    dirM = random(-0.05, 0.05);

    posS = -HALF_PI;
    dirS = random(-0.05, 0.05);

}

function draw() {
    background(10);

    h = String(hour()).padStart(2, '0');
    m = String(minute()).padStart(2, '0');
    s = String(second()).padStart(2, '0');
    ms = new Date().getMilliseconds();

    textAlign(CENTER);
    textSize(_fontSize);
    fill(255);
    strokeWeight(0);

    text(`${h}:${m}:${s}`, 0, (height/2)-(_fontSize/2), width, (height/2)-(_fontSize/2));

    // Timelines
    strokeWeight(6);
    posH += dirH;
    posM += dirM;
    posS += dirS;
    noFill();

    // Hours line
    stroke(colourH);
    arc(width/2, height/2, _fontSize*7, _fontSize*7, posH, posH + (PI * 2) * ((parseFloat(h)+(m/60))/24), OPEN);

    // Minutes line
    stroke(colourM);
    arc(width/2, height/2, _fontSize*6, _fontSize*6, posM, posM + (PI * 2) * ((parseFloat(m)+(s/60))/60), OPEN);

    // Seconds line
    stroke(colourS);
    arc(width/2, height/2, _fontSize*5, _fontSize*5, posS, posS + (PI * 2) * ((parseFloat(s)+(ms/1000))/60), OPEN);
}
var h;
var m;
var s;
var ms;

var colourH;
var colourM;
var colourS;

var _fontSize = 28;

function setup() {
    createCanvas(500, 250);
    stroke(255);

    colourH = color(random(255),random(255),random(255));
    colourM = color(random(255),random(255),random(255));
    colourS = color(random(255),random(255),random(255));
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

    text(`${h}:${m}:${s}`, 0, _fontSize * 1.1, width, _fontSize * 1.1);

    // Timelines
    let x0, x1, y0, y1;
    strokeWeight(6);

    // Hours line
    stroke(colourH);
    x0 = width * 0.2;
    x1 = x0 + ((width * 0.6) * ((parseFloat(h)+(m/60))/24));
    y0 = (_fontSize * 1.1) + (_fontSize * 2);
    y1 = (_fontSize * 1.1) + (_fontSize * 2);

    line(x0, y0, x1, y1);

    // Minutes line
    stroke(colourM);
    x0 = width * 0.2;
    x1 = x0 + ((width * 0.6) * ((parseFloat(m)+(s/60))/60));
    y0 = (_fontSize * 1.1) + (_fontSize * 4);
    y1 = (_fontSize * 1.1) + (_fontSize * 4);

    line(x0, y0, x1, y1);

    // Seconds line
    stroke(colourS);
    x0 = width * 0.2;
    x1 = x0 + ((width * 0.6) * ((parseFloat(s)+(ms/1000))/60));
    y0 = (_fontSize * 1.1) + (_fontSize * 6);
    y1 = (_fontSize * 1.1) + (_fontSize * 6);

    line(x0, y0, x1, y1);
}
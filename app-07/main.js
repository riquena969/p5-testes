var balls = [];
function setup() {
    createCanvas(1360, 635);
    stroke(255);
     
    balls.push(new Ball(mouseX, mouseY, 3, 0, 0));
}

function draw() {
    background(10);

    for (var i = balls.length - 1; i >= 0; i--) {
        balls[i].update();
        if (i == 0) {
            balls[0].x = mouseX;
            balls[0].y = mouseY;
        }
        balls[i].show();

        if (balls[i].remove && i != 0) {
            balls.splice(i, 1);
        }
    }

    for (var i = 0; i < balls.length; i++) {
        for (var j = i; j < balls.length; j++) {
            if (dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y) < (balls[i].r + balls[j].r) * 20) {
                stroke(255);
                strokeWeight((balls[i].r + balls[j].r) / 4);
                line(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
            }
        }
    }

    if (frameCount % 25 == 0) {
        balls.push(new Ball(random(0, width), random(0, height), random(1.5, 4.5), random(-0.8, 0.8), random(-0.8, 0.8)));
    }

}

function mouseClicked() {
    for (var i = 0; i < floor(random(1, 6)); i++) {
        balls.push(new Ball(mouseX, mouseY, random(1.5, 4.5), random(-0.8, 0.8), random(-0.8, 0.8)));
    }
}
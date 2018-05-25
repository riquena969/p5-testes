class Circle {

    constructor(x, y, w) {
        this.red   = 255;
        this.green = 255;
        this.blue  = 255;
        this.x = x;
        this.y = y;
        this.w = w;
        this.drag = false;
        this.dirX = 0;
        this.dirY = 0;
    }
    show() {
        strokeWeight(3);
        stroke(255 - this.red, 255 - this.green, 255 - this.blue);
        fill(this.red, this.green, this.blue);

        ellipse(this.x, this.y, this.w);
    }
    update() {
        if (this.x < this.w/2) this.x = this.w/2;
        if (this.x > width - this.w/2) this.x = width - this.w/2;
        if (this.y < this.w/2) this.y = this.w/2;
        if (this.y > height - this.w/2) this.y = height - this.w/2;

        if (!this.drag) {
            this.x += this.dirX;
            this.y += this.dirY;
            this.dirX *= 0.99;
            this.dirY *= 0.99;

            if (this.x < this.w/2 || this.x > width - this.w/2) {
                this.dirX *= -1;
                this.red   = random(255);
                this.green = random(255);
                this.blue  = random(255);
            }
            if (this.y < this.w/2 || this.y > height - this.w/2) {
                this.dirY *= -1;
                this.red   = random(255);
                this.green = random(255);
                this.blue  = random(255);
            }
        }
    }
    mouseInside() {
        return dist(mouseX, mouseY, this.x, this.y) <= this.w / 2;
    }
    setDrag(status) {
        this.drag = status;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setDirX(dir) {
        this.dirX = dir;
    }
    setDirY(dir) {
        this.dirY = dir;
    }
}
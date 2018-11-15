class Ball {

	constructor(x, y, r, mx, my, c) {
		this.x  = x;
		this.y  = y;
		this.r  = r;
		this.mx = mx;
		this.my = my;
		this.c  = c;

		this.remove = false;
	}

	show() {
		fill(this.c);
        noStroke();
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	update() {
		this.x += this.mx;
		this.mx += this.mx/1000;
		this.y += this.my;
		this.my += this.my/1000;

		this.remove = (this.x - (this.r * 3) > width || this.x + (this.r * 3) < 0 || this.y - (this.r * 3) > width || this.y + (this.r * 3) < 0);
	}
}
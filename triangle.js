function Triangle(a, b, c, fill, number) {
	Triangle.count++;
	this.a = a;
	this.b = b;
	this.c = c;
	this.fill = fill;
	if(typeof number === "undefined") {
		this.number = Triangle.count;
	} else {
		this.number = number;
	}
}

Triangle.prototype.draw = function(context) {
	context.fillStyle = this.fill;
	context.beginPath();
	context.moveTo(this.a.x, this.a.y);
	context.lineTo(this.b.x, this.b.y);
	context.lineTo(this.c.x, this.c.y);
	context.closePath();
	context.fill();
	context.stroke();
}

Triangle.prototype.setBC = function() {
	switch(this.number) {
		case 0:
			this.b = new Point(this.a.x + l, this.a.y);
			this.c = new Point(this.a.x, this.a.y + w);
			break;
		case 1:
			this.b = new Point(this.a.x, this.a.y + l);
			this.c = new Point(this.a.x + w, this.a.y + l);
			break;
		case 2:
			this.b = new Point(this.a.x + l, this.a.y);
			this.c = new Point(this.a.x + l, this.a.y - w);
			break;
		case 3:
			this.b = new Point(this.a.x - w, this.a.y);
			this.c = new Point(this.a.x, this.a.y + l);
			break;
		default:
			break;
	}

}

Triangle.prototype.log = function() {
	console.log(this.number + ": [(" + this.a.x + "," + this.a.y + ");(" + this.b.x + "," + this.b.y + ");(" + this.c.x + "," + this.c.y + ")]");
}

Triangle.prototype.onCanvas = function() {
	return this.a.onCanvas() && this.b.onCanvas() && this.c.onCanvas();
}

Triangle.prototype.overlapping = function(triangleArray) {
	for(var x = 0; x < triangleArray.length; x++) {
		if(x != this.number) {
			if(pointInTriangle(this.a, triangleArray[x]) || pointInTriangle(this.b, triangleArray[x]) || pointInTriangle(this.c, triangleArray[x])) {
				return true;
			}
		}
	}
	return false;
}

Triangle.count = -1;
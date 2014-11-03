function Point(x, y, z) {
	this.x = x;
	this.y = y;
	if(typeof z === "undefined") {
		this.z = 0;
	} else {
		this.z = z;
	}
}

Point.prototype.log = function() {
	console.log("(" + this.x + "," + this.y + "," + this.z + ")");
}

Point.prototype.onCanvas = function() {
	if (this.x > l + w || this.x < 0)
		return false;
	if (this.y > l + w || this.y < 0)
		return false;
	return true;
}

function crossProduct(a, b) {
	var x = (a.y * b.z) - (a.z * b.y);
	var y = (a.z * b.x) - (a.x * b.z);
	var z = (a.x * b.y) - (a.y * b.x);
	return new Point(x, y, z);
}

function dotProduct(a, b) {
	return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
}

function pointInTriangle(p, triangle) {
	if(sameSide(p, triangle.a, triangle.b, triangle.c) && sameSide(p, triangle.b, triangle.a, triangle.c) && sameSide(p, triangle.c, triangle.a, triangle.b)) {
		return true;
	} else {
		return false;
	}
}

function sameSide(p1, p2, a, b) {
	var b_a = new Point(b.x - a.x, b.y - a.y, b.z - a.z);
	var p1_a = new Point(p1.x - a.x, p1.y - a.y, p1.z - a.z);
	var p2_a = new Point(p2.x - a.x, p2.y - a.y, p2.z - a.z);
	var cp1 = crossProduct(b_a, p1_a);
	var cp2 = crossProduct(b_a, p2_a);
	if(dotProduct(cp1, cp2) >= 0) {
		return true;
	} else {
		return false;
	}
}

function pointDistance(p1, p2) {
	return Math.pow(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2), 1/2);
}
var isDragging = false;
var dragX;
var dragY;
var l = 200;
var w = 300;

$(document).ready(function() {
	canvasOffset = $("#canvas").offset();
	offsetX = canvasOffset.left;
	offsetY = canvasOffset.top;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	triangleArray = drawTriangles(l, w);
	bindHandlers();
});

function drawTriangles(a, b) {
	var triangle0 = new Triangle(new Point(0, 0), new Point(l, 0), new Point(0, w), "blue");
	triangle0.draw(context);
	
	var triangle1 = new Triangle(new Point(0, w), new Point(0, w+l), new Point(w, w+l), "salmon");
	triangle1.draw(context);
	
	var triangle2 = new Triangle(new Point(w, w+l), new Point(w+l, w+l), new Point(w+l, l), "brown");
	triangle2.draw(context);
	
	var triangle3 = new Triangle(new Point(w+l, 0), new Point(l, 0), new Point(w+l, l), "red");
	triangle3.draw(context);
	
	return [triangle0, triangle1, triangle2, triangle3];
}

function activeTriangle(mousepos) {
	for(x = 0; x < triangleArray.length; x++) {
		if(pointInTriangle(mousepos, triangleArray[x])) {
			return x;
		}
	}
	return false;
}
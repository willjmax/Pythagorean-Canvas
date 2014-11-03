var mousepos;
var initial_mousepos;

function bindHandlers() {
	$("#canvas").mousedown(function(e){ handleMouseDown(e);});
	$("#canvas").mouseup(function(e){ handleMouseUp(e);});
	$("#canvas").mousemove(function(e){ handleMouseMove(e);});
	$("#canvas").mouseout(function(e){ handleMouseOut(e);});
}

function getXY(e) {
	dragX = parseInt(e.clientX-offsetX);
	dragY = parseInt(e.clientY-offsetY);
	mousepos = new Point(dragX, dragY);
}

function handleMouseDown(e) {
	getXY(e);
	initial_mousepos = mousepos;
	active_triangle_index = activeTriangle(mousepos);
	if(active_triangle_index !== false) {
		isDragging = true;
	}
	
}

function handleMouseUp(e) {
	getXY(e);
	isDragging = false;
}

function handleMouseMove(e) {
	if(isDragging) {
		getXY(e);
		var distance_vector = new Point(initial_mousepos.x - mousepos.x, initial_mousepos.y - mousepos.y);
		var tempA = new Point(triangleArray[active_triangle_index].a.x - distance_vector.x, triangleArray[active_triangle_index].a.y - distance_vector.y)
		var tempB = new Point(triangleArray[active_triangle_index].b.x - distance_vector.x, triangleArray[active_triangle_index].b.y - distance_vector.y);
		var tempC = new Point(triangleArray[active_triangle_index].c.x - distance_vector.x, triangleArray[active_triangle_index].c.y - distance_vector.y);
		var tempTriangle = new Triangle(tempA, tempB, tempC, "lol", triangleArray[active_triangle_index].number);
		tempTriangle.setBC();	
		if(tempTriangle.onCanvas()) {
			triangleArray[active_triangle_index].a = new Point(tempTriangle.a.x, tempTriangle.a.y);
			triangleArray[active_triangle_index].b = new Point(tempTriangle.b.x, tempTriangle.b.y);
			triangleArray[active_triangle_index].c = new Point(tempTriangle.c.x, tempTriangle.c.y);
			context.clearRect(0, 0, 500, 500);
			for(var x = 0; x < triangleArray.length; x++) {
				triangleArray[x].draw(context);
			}
		}
		initial_mousepos = mousepos;
	}
}

function handleMouseOut(e) {
	isDragging = false;
}
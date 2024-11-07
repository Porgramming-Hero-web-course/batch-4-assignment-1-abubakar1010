interface Circle {
	shape: "circle";
	radius: number;
}

interface Rectangle {
	shape: "rectangle";
	width: number;
	height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
	if (shape.shape === "circle") {
		return Math.PI * Math.pow(shape.radius, 2);
	} else {
		return shape.height * shape.width;
	}
};

const rectangleArea = calculateShapeArea({
	shape: "circle",
	radius: 9,
});

console.log(rectangleArea);

/*
 *
 * Exercise 1: Overriding Methods - Shape and Circle
Goal: Understand how a child class can provide its own implementation of a method already defined in its parent class.

Instructions:

 -- Parent Class: Shape

Define a class named Shape.

The constructor should take color as an argument and assign it to this.color.

Add a method describe() that logs: "This is a [color] shape."

Add a method getArea() that logs: "Area calculation not implemented for generic Shape."
(This is a placeholder as a generic shape doesn't have a concrete area).

-- Child Class: Circle

Define a class named Circle that extends Shape.

The constructor should take color and radius.

Call super(color) in the constructor to initialize the parent's color.

Assign radius to this.radius.

Override the describe() method. It should log: "This is a [color] circle with radius [radius]."

Override the getArea() method. It should return the area of the circle (π⋅radius^2). You can use Math.PI.

-- Testing:

Create an instance of Shape (e.g., a "blue" shape). Call describe() and getArea() on it.

Create an instance of Circle (e.g., a "red" circle with radius 5). Call describe() and getArea() on it. Log the returned area.

Observe how the Circle's methods override the Shape's methods.

*/

class Shape{
	constructor(color){
		this.color = color;
	}
	describe(){
		console.log(`This is a ${this.color} shape`);
	}
	getArea(){
		console.log("Area Calculation Not Implemented For Generic Shapes");
	}
}

class Circle extends Shape{
	constructor(color, radius){
		super(color);
		this.radius = radius;
	}
	describe(){
		console.log(`This is a ${this.color} circle with radius ${this.radius}`);
	}
	getArea(){
		return (Number(Math.PI)*(this.radius*this.radius));
	}
}



const shape1 = new Shape("blue");
const circ1 = new Circle("red", 5);


shape1.getArea();
shape1.describe();
console.log("END OF SHAPE ____________________");
circ1.describe();
console.log(circ1.getArea());

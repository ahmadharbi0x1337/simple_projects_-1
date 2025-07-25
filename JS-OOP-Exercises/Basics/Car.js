/* 
 *
 * Exercise 3: Car Class with Default Values
Goal: Learn to set default values for properties in the constructor.

Instructions:

Define a class named Car.

The constructor should take make, model, and year.

If year is not provided, default it to 2023.

Add a method getCarInfo() that returns a string like: "This is a [year] [make] [model]."

Create two Car objects: one with all arguments, and one without the year.

Log the car info for both.
*/

class Car{
	constructor(make, model, year=2013){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	getCarInfo(){
		return `This is a ${this.year}${this.make}${this.model}`;
	}
}


const car1 = new Car("Dodge", "Demon");
const car2 = new Car("Chevroleh", "Kamaro", 2015);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());


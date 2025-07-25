/*
 *
 * Exercise 2: Chaining Constructors and More Overriding - Vehicle and Car
   Goal: Further practice using super() for constructor chaining and method overriding, especially with additional properties in the child class.

Instructions:

-- Parent Class: Vehicle

Define a class named Vehicle.

The constructor should take make, model, and year.

Add a method start() that logs: "The [year] [make] [model] starts."

Add a method stop() that logs: "The [year] [make] [model] stops."

-- Child Class: Car

Define a class named Car that extends Vehicle.

The constructor should take make, model, year, and numDoors.

Call super(make, model, year) to initialize parent properties.

Assign numDoors to this.numDoors.

Override the start() method. It should first call the parent's start() method using super.start(), and then log: "Vroom! The engine roars."

Add a new method honk() that logs: "Beep beep!"

-- Testing:

Create a Vehicle instance (e.g., a "Generic" "Motorcycle" 2020). Call start() and stop().

Create a Car instance (e.g., a "Toyota" "Camry" 2023, 4 doors). Call start(), stop(), and honk(). Observe the output of the start() method.
*/





class Vehicle{
	constructor(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	start(){
		console.log(`The ${this.year} ${this.make} ${this.model} starts!`);
	}
	stop(){
		console.log(`The ${this.year}${this.make}${this.model} stop`);
	}
}

class Car extends Vehicle{
	constructor(make, model, year, numDoors){
		super(make, model, year);
		this.numDoors = numDoors;
	}
	start(){
		super.start();
		console.log("Vroom! The Engine Roars!!");
	}
	honk(){
		console.log("Beep Beep!");
	}
}



const vehicle1 = new Vehicle("Volvo", "Truck", 2014);
const car1 = new Car("Dodge", "Demon", 2013, 2);


console.log("START OF VEHICLE--------------");
vehicle1.start();
vehicle1.stop();
console.log("END OF VEHICLE----------------");
console.log("START OF CAR------------------");
car1.start();
car1.stop();
car1.honk();
console.log(car1.numDoors);
console.log("END OF CAR--------------------");

// console.log("SEE WHAT HAPPENS WHEN GETTING THE numDoors FROM VEHICLE");
// console.log(vehicle1.numDoors); --> OUTPUT: undefined
// console.log("SEE WHAT HAPPENS WHEN CALLING honk() on Vehicle??");
// vehicle1.honk(); --> OUTPUT: honk is not a function

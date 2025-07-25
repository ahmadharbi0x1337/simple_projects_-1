/*
 *
 * Exercise 1: Basic Person Class
Goal: Create a simple class with a constructor and a method.

Instructions:

Define a class named Person.

The constructor should take name and age as arguments.

Inside the constructor, assign these arguments to instance properties (this.name and this.age).

Add a method called greet() that logs a message like: "Hello, my name is [name] and I am [age] years old."

reate two different Person objects.

Call the greet() method on each object.
*
*/


// A Class is A Blueprint, consider it as the factory that holds the plans about how to create specific things (AKA "Objects")
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, and i'm ${this.age} years old.`);
	}
}

// Each of those is an Object (AKA instances of the class)
const person1 = new Perosn("Jack", 34);
const person2 = new Person("Guy", 37);

person1.great();
person2.great();


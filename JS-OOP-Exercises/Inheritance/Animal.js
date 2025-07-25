/* 
 *
 * Exercise 5: Inheritance - Animal and Dog
Goal: Understand how to use extends for inheritance and super() to call the parent constructor.

Instructions:

Define a class named Animal.

The constructor should take name and sound.

Add a method makeSound() that logs "[name] makes a [sound] sound."

Define a class named Dog that extends Animal.

The Dog constructor should take name, sound, and breed.

Inside the Dog constructor, call super(name, sound) to pass arguments to the Animal constructor.

Add a method fetch() to the Dog class that logs "[name] fetches the ball!"

Create an Animal object and a Dog object.

Call makeSound() on both, and fetch() only on the Dog object.
*
*/

class Animal{
	constructor(name, sound){
		this.name = name;
		this.sound = sound;
	}
	makeSound(){
		console.log(`${this.name} makes a ${this.sound} sound`);
	}
}


class Dog extends Animal{
	constructor(name, sound, breed){
		super(name, sound);
		this.breed = breed;
	}
	fetch(){
		console.log(`${this.name} fetches the ball!`);
	}
}


const tiger = new Animal("JAX", "Roar");
const dog = new Dog("Silver", "Bark", "Doperman");


tiger.makeSound();
dog.makeSound();
dog.fetch();
tiger.fetch();




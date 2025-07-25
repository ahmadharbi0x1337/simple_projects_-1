/*
 *
 * Exercise 3: Static Methods and Inheritance - Calculator and ScientificCalculator
Goal: Understand static methods (methods that belong to the class itself, not instances) and how they behave with inheritance.

Instructions:

-- Parent Class: Calculator

Define a class named Calculator.

Add a static method add(a, b) that returns a + b.

Add a static method subtract(a, b) that returns a - b.

(No constructor needed as we won't be creating instances for static methods).

-- Child Class: ScientificCalculator

Define a class named ScientificCalculator that extends Calculator.

Add a static method multiply(a, b) that returns a * b.

Add a static method divide(a, b) that returns a / b.

Add a static method power(base, exponent) that returns base raised to the power of exponent (use Math.pow()).

-- Testing:

Use Calculator.add(5, 3) and Calculator.subtract(10, 4) and log the results.

Use ScientificCalculator.add(7, 2) (demonstrates inheritance of static methods).

Use ScientificCalculator.multiply(6, 3), ScientificCalculator.divide(20, 5), and ScientificCalculator.power(2, 4) and log the results.

Try to call new Calculator() or new ScientificCalculator() – observe that it works, but there's no state for the instance. Also try new Calculator().add(1,2) and see the error. This helps reinforce that static methods are not on instances.

*/


class Calculator{
	static add(a, b){
		return a+b;
	}
	static subtract(a, b){
		return a-b;
	}
}

class ScientificCalculator extends Calculator{
	static multiply(a, b){
		return a*b;
	}
	static divide(a, b){
		return a/b;
	}
	static power(base, exp){
		return Math.pow(base, exp);
	}
}


const res1 = Calculator.add(1, 3);
const res2 = ScientificCalculator.add(5, 5);
console.log(res1, res2);

// THINK OF THIS LESSON THAT WE ARE CREATING A CLASS (THE FACTORY), TO HELP USE WITH THINGS ON THE SPOT,
// SOMETHING LIKE AN INDIVIDUAL DEAL NEEDS TO BE DONE FAST, SO WE GO DIRECTLY TO THE FACTORY AND TELL IT TO DO RIGHT A WAY.
/*
 *
 class Random extends Calculator{
	constructor(a, b, c){
		super();
		this.a = a;
		this.b = b;
		this.c = c;
	}
	poly(){
		const a1 = super.constructor.add(this.a, this.b);
		const a2 = super.constructor.add(this.b, this.c);
		const a3 = super.constructor.add(this.a, this.c);
		return a1+a2+a3;
	}
 }

const vec1 = new Random(1, 1, 1);
console.log(vec1.poly());
*/


/*
 * SOME NOTES REGARDING INHERITANCE AND STATIC METHODS.
 * YOU CAN DEFINE THE SAME METHODS AS INSTANCE METHODS BY CREATING instanceMethod{}, BUT YOU WILL HAVE TO DO ONE OF THE FOLLOWING:
 * 1) EITHER CALL this.constructor.<THE_STATIC_METHOD> , WHERE this.constructor REFERS TO THE CLASS ITSELF.
 * 2) OR JUST THE NAME OF THE CLASS.
 *
 * MOREOVER, IF YOU CAN SEE MY RANDOM CLASS ABOVE, I'M ACCESSING THE STATIC METHODS OF THE CACLULATOR USING super.constructor
 * NOW MAYBE THIS SEEMS RIDICOULOS BECAUSE WHAT I COULD JUST DID IS : Calculator.add().
 * BUT I JUST HAD A FEELING A TRIED IT OUT.!!HAHAHAH.
 * 
 */

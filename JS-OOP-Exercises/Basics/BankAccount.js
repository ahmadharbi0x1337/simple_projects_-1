/* 
 * Exercise 4: BankAccount Class with Deposit/Withdrawal
Goal: Practice modifying object properties through methods and adding basic validation.

Instructions:

Define a class named BankAccount.

The constructor should take accountNumber and initialBalance. If initialBalance is not provided, default it to 0.

Add a deposit(amount) method. It should add amount to the initialBalance (make sure amount is positive).

Add a withdraw(amount) method. It should subtract amount from the initialBalance, but only if there are sufficient funds (i.e., balance - amount >= 0). If not, log an error message.

Add a getBalance() method that returns the current balance.

Create a BankAccount object.

Perform a deposit, then a valid withdrawal, then an invalid withdrawal, and finally log the balance.

*/


class BankAccount{
	constructor(accountNumber, initialBalance=0){
		this.accountNumber = accountNumber;
		this.initialBalance = initialBalance;
	}
	deposit(amount){
		if (amount > 0){
			this.initialBalance = this.initialBalance + amount;
			return this.initialBalance;
		}
		throw new Error("Please Enter A Valid Amount");
	}
	withdraw(amount){
		if (amount < 0){
			throw new Error("Please Enter A Valid Amount");
		}
		if (this.initialBalance - amount >= 0){
			this.initialBalance = this.initialBalance - amount;
			return this.initialBalance;
		}
		throw new Error("Insufficient Funds");
	}
	getCurrentBalance(){
		return this.initialBalance;
	}

}

const rich = new BankAccount(75720124, 20000);
const poor = new BankAccount(3554, 100);
const fraud = new BankAccount(54646, 250);



// Get Balance
console.log("THE RICH");
console.log(rich.getCurrentBalance());
console.log("--------------------------------------------");
// Adding Funds To The Poor Based On The Rich Balance, BE AWARE, THE RICH BALANCE DIDN'T CHANGE!!
console.log("THE POOR");
poor.deposit(Number(rich.getCurrentBalance()));
console.log(poor.getCurrentBalance());
console.log("--------------------------------------------");
// FRAUD DETECTION
console.log("THE FRAUD");
fraud.withdraw(300);


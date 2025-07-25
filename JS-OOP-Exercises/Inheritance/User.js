/*
 *
 * Exercise 4: Protected-like Properties and Method Visibility (Conceptual & Convention) - User and Admin
Goal: Understand how to manage internal data in parent and child classes. JavaScript doesn't have true protected keywords like some other languages. Instead, we use conventions (like an underscore _) and rely on encapsulation through closures or private class fields (a newer feature) for stricter privacy. For this exercise, we'll stick to convention as it's more universally understood.

Instructions:

-- Parent Class: User

Define a class named User.

The constructor should take username and password.

Store username as this.username. For password, store it internally as this._password (the underscore _ is a convention indicating it's intended to be "private" or "protected" and not directly accessed from outside).

Add a method authenticate(inputPassword) that returns true if inputPassword matches this._password, otherwise false.

Add a method getProfile() that returns a string like: "User: [username]".

-- Child Class: Admin

Define a class named Admin that extends User.

The constructor should take username, password, and adminLevel.

Call super(username, password).

Assign adminLevel to this.adminLevel.

Override the getProfile() method. It should first call the parent's getProfile() using super.getProfile(), and then append " (Admin Level: [adminLevel])".

Add a new method canManageUsers() that always returns true.

-- Testing:

Create a User instance (e.g., user1 with "john_doe", "pass123"). Test authenticate() with correct and incorrect passwords. Call getProfile().

Create an Admin instance (e.g., admin1 with "super_admin", "adminPass", 5). Test authenticate(). Call getProfile() and canManageUsers().

Try to directly access user1._password or admin1._password. While it's technically possible in JavaScript, explain why it's generally discouraged (violates the "protected" convention, leads to less maintainable code).
*
*/




class User{
	constructor(username, password){
		this.username = username;
		this._password = password;
	}
	authenticate(inputPassword){
		return inputPassword === this._password;
	}
	getProfile(){
		return `User: ${this.username}`;
	}
}

class Admin extends User{
	constructor(username, password, adminLevel){
		super(username, password);
		this.adminLevel = adminLevel;
	}
	getProfile(){
		return `${super.getProfile()}, Admin Level: ${this.adminLevel}`;
	}
	canManageUsers(){
		return true;
	}	
}


const user1 = new User("JohnDoe", "yy56");

console.log(user1.authenticate("yy54"));
console.log(user1.getProfile());


const admin3 = new Admin("Ahmad", "12345", "L77");

console.log(admin3.getProfile());
console.log(admin3.authenticate("1234"));

console.log(admin3._password);


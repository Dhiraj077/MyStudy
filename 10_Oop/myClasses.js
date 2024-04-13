<<<<<<< HEAD
// ES6

class User{
    // The constructor method is a special method for creating and initializing an object created with a class.
    // In this case, it takes three parameters: username, email, and password.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this._password = password; // The underscore at the beginning of the property name indicates that this property should be considered private.
    }
 
    // This method takes no arguments and returns the encrypted version of the user's password.
    encryptPassword(){
        // The return statement ends function execution and specifies a value to be returned to the function caller.
        // In this case, it returns the encrypted version of the user's password by concatenating the password with "--encrypted".
        return `${this._password}--encrypted`;
    }

    changeUsername(){
        // return `${this.username.toUpperCase()}`
    }
 }
 
 // Instantiating a new User object with the username 'dhiraj', email 'dot@gmail.com', and password 'taken123'.
 const start = new User('dhiraj', 'dot@gmail.com', 'taken123');
 
 // Calling the encryptPassword method on the 'start' object and logging the returned value to the console.
 console.log(start.encryptPassword());
 console.log(start.changeUsername());

//  Behind the scene without class syntax

function User (username, email, password){
    this.username = username;
    this.email = email;
    this._password = password;
}

User.prototype.encryptPassword = function () {
    return `${this._password}--encrypted`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const start1 = new User('dhiraj', 'dot@gmail.com', 'taken123');

console.log(start1.encryptPassword());
console.log(start1.changeUsername());
=======
// ES6

class User{
    // The constructor method is a special method for creating and initializing an object created with a class.
    // In this case, it takes three parameters: username, email, and password.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this._password = password; // The underscore at the beginning of the property name indicates that this property should be considered private.
    }
 
    // This method takes no arguments and returns the encrypted version of the user's password.
    encryptPassword(){
        // The return statement ends function execution and specifies a value to be returned to the function caller.
        // In this case, it returns the encrypted version of the user's password by concatenating the password with "--encrypted".
        return `${this._password}--encrypted`;
    }

    changeUsername(){
        // return `${this.username.toUpperCase()}`
    }
 }
 
 // Instantiating a new User object with the username 'dhiraj', email 'dot@gmail.com', and password 'taken123'.
 const start = new User('dhiraj', 'dot@gmail.com', 'taken123');
 
 // Calling the encryptPassword method on the 'start' object and logging the returned value to the console.
 console.log(start.encryptPassword());
 console.log(start.changeUsername());

//  Behind the scene without class syntax

function User (username, email, password){
    this.username = username;
    this.email = email;
    this._password = password;
}

User.prototype.encryptPassword = function () {
    return `${this._password}--encrypted`;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const start1 = new User('dhiraj', 'dot@gmail.com', 'taken123');

console.log(start1.encryptPassword());
console.log(start1.changeUsername());
>>>>>>> 8b21b92d45d1f3364797126efa50570bb436d0cd

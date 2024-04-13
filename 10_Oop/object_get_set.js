// Define a User object with private properties _email and _password,
// and getter and setter methods for email and password
const User = {
    _email: 'd@dg.com',
    _password: "abc",

    // Getter method for email, returns the email address in uppercase
    get email(){
        return this._email.toUpperCase();
    },

    // Setter method for email, sets the email address
    set email(value){
        this._email = value;
    },

    // Getter method for password, returns the password in uppercase
    get password(){
        return this._password.toUpperCase()
    },

    // Setter method for password, sets the password
    // (validation for password can be added here)
    set password(value){
        this._password = value;
    }
}

// Create an instance of User object
const app = Object.create(User);

// Log the email address of the app object
console.log(app.email);
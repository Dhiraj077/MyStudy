// Define a constructor function called 'User' that takes in two parameters: 'email' and 'password'
function User(email, password){

    // Initialize the private properties '_email' and '_password' with the given parameters
    this._email = email;
    this._password = password;

    // Define a getter and setter for the 'email' property
    Object.defineProperty(this, 'email', {
        // The getter returns the private '_email' property in uppercase
        get: function(){
            return  this._email.toUpperCase();
        },
        // The setter updates the private '_email' property with the given value
        set:function (value) {
            this._email = value
        }
    });

    // Define a getter and setter for the 'password' property
    Object.defineProperty(this, 'password', {
        // The getter returns the private '_password' property in uppercase
        get: function(){
            return  this._password.toUpperCase();
        },
        // The setter updates the private '_password' property with the given value
        set:function (value) {
            this._password = value
        }
    });
}

// Create a new instance of the 'User' object with the email "dhiraj@ff.com" and password "sdsdd"
const app = new User("dhiraj@ff.com", "sdsdd");

// Log the 'email' property of the 'app' object, which will be returned in uppercase
console.log(app.email); // DHIRAJ@FF.COM
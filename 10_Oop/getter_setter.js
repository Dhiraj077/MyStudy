class User{
    // Constructor to initialize the user's email and password
    constructor(email, password){
        this.email = email; // Initialize the user's email
        this.password = password; // Initialize the user's password
    }

    // Getter for the user's email
    get email(){
        // Return the user's email in uppercase
        return this._email.toUpperCase();
    }

    // Setter for the user's email
    set email(value){
        // Set the user's email to the given value
        this._email = value;
    }

    // Getter for the user's password
    get password(){
        // Return the user's password concatenated with 'dhiraj'
        return `${this._password}dhiraj`;
    }

    // Setter for the user's password
    set password(value){
        // Set the user's password to the given value in uppercase
        this._password = value.toUpperCase();
    }
}

// Create a new user instance with the email 'dhiraj@gmail.com' and password 'acbv'
const dhiraj = new  User("dhiraj@gmail.com", "acbv");

// Log the user's password and email to the console
console.log(dhiraj.password);
console.log(dhiraj.email);
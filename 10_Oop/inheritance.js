// Define a User class
class User {
    // Constructor for User class, takes in a username
    constructor(username) {
        // Set the username property
        this.username = username;
    }
 
    // Function to log the username
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
 }
 
 // Define a Teacher class that extends User
 class Teacher extends User {
    // Constructor for Teacher class, takes in a username, email, and password
    constructor(username, email, password) {
        // Call the User constructor and pass in the username
        super(username);
 
        // Set the email and password properties
        this.email = email;
        // Set the password property as a private property
        this._password = password;
    }
 
    // Function to add a course
    addCourse() {
        console.log(`Adding a new course by ${this.username}`);
    }
 }
 
 // Create a new Teacher instance with the username 'drona', email 'drona@gmail.com', and password '123456'
 const userlog = new Teacher('drona', 'drona@gmail.com', '123456');
 
 // Call the addCourse method on the userlog instance
 userlog.addCourse();
 
 // Create a new User instance with the username 'John Doe'
 const userlogme = new User('John Doe');
 
 // Call the logMe method on the userlogme instance
 userlogme.logMe();

 console.log(userlog instanceof User);
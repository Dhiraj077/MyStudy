<<<<<<< HEAD
class User {
    /**
     * Create a new User object with a given username.
     * @constructor
     * @param {string} username - The username for the User object.
     */
    constructor(username) {
        this.username = username;
    }
 
    /**
     * Log the username of the User object.
     * @method
     * @instance
     */
    logMe() {
        console.log(`Username: ${this.username}`);
    }
 
    /**
     * Generate a static ID for the User class.
     * @method
     * @static
     * @return {string} - A static ID for the User class.
     */
    static createID() {
        return `123`;
    }
 }
 
 const drive = new User('Drive');
 drive.logMe(); // Outputs "Username: Drive"
 // console.log(drive.createID);
 
 class Teacher extends User {
    /**
     * Create a new Teacher object with a given username and email.
     * @constructor
     * @param {string} username - The username for the Teacher object.
     * @param {string} email - The email for the Teacher object.
     */
    constructor(username, email) {
        super(username);
        this.email = email;
    }
 }
 
 const phone = new Teacher('iphone', 'i@phone.com');
 phone.logMe(); // Outputs "Username: iphone"
=======
class User {
    /**
     * Create a new User object with a given username.
     * @constructor
     * @param {string} username - The username for the User object.
     */
    constructor(username) {
        this.username = username;
    }
 
    /**
     * Log the username of the User object.
     * @method
     * @instance
     */
    logMe() {
        console.log(`Username: ${this.username}`);
    }
 
    /**
     * Generate a static ID for the User class.
     * @method
     * @static
     * @return {string} - A static ID for the User class.
     */
    static createID() {
        return `123`;
    }
 }
 
 const drive = new User('Drive');
 drive.logMe(); // Outputs "Username: Drive"
 // console.log(drive.createID);
 
 class Teacher extends User {
    /**
     * Create a new Teacher object with a given username and email.
     * @constructor
     * @param {string} username - The username for the Teacher object.
     * @param {string} email - The email for the Teacher object.
     */
    constructor(username, email) {
        super(username);
        this.email = email;
    }
 }
 
 const phone = new Teacher('iphone', 'i@phone.com');
 phone.logMe(); // Outputs "Username: iphone"
>>>>>>> 8b21b92d45d1f3364797126efa50570bb436d0cd
 console.log(Teacher.createID()) // Outputs "123"
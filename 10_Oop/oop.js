<<<<<<< HEAD
// object literal

const user = {
    username: 'John Doe',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.getUserDetails());
// console.log(user.username);

// constructor
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this
}

const userOne = new User("Jane Doe", 5, true)
const  userTwo = new User("John Smith", 10, false)
console.log(userOne.constructor)
// console.log(userTwo)
=======
// object literal

const user = {
    username: 'John Doe',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.getUserDetails());
// console.log(user.username);

// constructor
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this
}

const userOne = new User("Jane Doe", 5, true)
const  userTwo = new User("John Smith", 10, false)
console.log(userOne.constructor)
// console.log(userTwo)
>>>>>>> 8b21b92d45d1f3364797126efa50570bb436d0cd

const user = {
    username: "Dhiraj",
    password: "123456",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chat () {
//     let username = "Dhiraj"
//     console.log(this.username);
// }

// chat()

// const chat = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chat()

const chat = () => {
    let username = "hitesh"
    console.log(this);
}
// chat()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2  // implesent return function

// const addTwo = (num1, num2) => (num1 + num2) // implesent

const addTwo = (num1, num2) => ({username: "Dhiraj"}) // explesent

console.log(addTwo(10, 20));


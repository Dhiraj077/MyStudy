// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "John",
  age: 30,
  [mySym]: "true",
  location: "Mumbai",
  email: "john@google.com",
  isLoggedIN: false,
  lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "Dhiraj@google.com"
// Object.freeze(JsUser)
JsUser.email = "dhiraj@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");;
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);;
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
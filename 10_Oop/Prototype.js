// let myName = 'John   '
// let myplace = "New York       "

// console.log(myName.truelength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhiraj = function(){
    console.log(`dhiraj is present in all objects`);
}

Array.prototype.heydhiraj = function(){
    console.log(`Dhiraj says hello`);
}

// myHeros.dhiraj()
// myHeros.heydhiraj()

// Inheritance

const User = {
    name: 'John Doe',
    emai: 'john@doe.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __Proto__: TeachingSupport
}

Teacher.__Proto__ = User

// Modern Syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'Jane Doe    ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenth is: ${this.trim().length}`);
}

anotherUsername.trueLength();

'dhiraj'.trueLength()
'thermal'.trueLength()
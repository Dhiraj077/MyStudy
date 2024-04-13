// Get the property descriptor for Math.PI
const discripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// Log the property descriptor for Math.PI
console.log(discripter);

// Log the value of Math.PI
console.log(Math.PI);

// Define a user object with various properties
const user = {
    name: 'John',
    age: 30,
    isAvailable: true,

    // Define a userdata function that logs 'User Data'
    userdata: function() {
        console.log('User Data');
    }
}

// Get the property descriptor for user.name
console.log(Object.getOwnPropertyDescriptor(user, "name"));

// Use Object.defineProperty to change the property descriptor for user.name
Object.defineProperty(user, 'name', {
    // Set the writable property to false, making user.name non-writable
    writable: false,
    // Set the enumerable property to false, making user.name non-enumerable
    enumerable: false
})

// Log the properties of the user object, excluding functions
for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function') {
        console.log(` ${key}: ${value}`);
    }
} 
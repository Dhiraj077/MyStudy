// Primitive
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt




// Reference (Non primitive)
// Object, Array, Function...etc.

// *****************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "DhirajArts"

let anothername = myYoutubename
anothername = "CodeandArts"

console.log(myYoutubename);
console.log(anothername);


let user = {
    email: "user@gmail.com",
    upi: "user@ypl"
}

let usertwo = user

usertwo.email =  "Dhiraj@google.com"
console.log(user.email);
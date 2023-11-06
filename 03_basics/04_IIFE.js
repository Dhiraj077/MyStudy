// Immediately Invoked Function Expressions (IIFE)


(function chat(){
    console.log("Hello World");
})();
// Output: Hello World

// ( () =>{
//     console.log("Goodbye World");
// })()

( (name) =>{
    console.log(`Welcome back ${name}`);
})('Dhiraj')
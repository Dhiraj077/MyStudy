const myObject = {
    // 1. Write a JavaScript program to create an object with properties and methods:
    JS : "JavaScript",
    cpp: "C++",
    rb : "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} is a shortcut for ${myObject[key]}`);
}

// -------------------------------------------------------------------------

const programming = ["JS", "Rb", "py", "Java", "cpp"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}
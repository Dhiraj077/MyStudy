const coding = ["JS", "Rb", "Python", "Java", "C++"]

// coding.forEach( function (item) {
//     console.log("I can code in " + item);
// })

// coding.forEach( (item) => {
//     console.log(`I can code in ${item}`);
// })

// --------------

// function printMe(item) {
//     console.log(`I can code in ${item}`)
// }
// coding.forEach(printMe)

// ----------------

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// /--------------------

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "JAVA",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(`My favorite programming language is ${item.languageName}, and its file name is ${item.languageFileName}.`);
})
const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spred opretor
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [3, 6, 8, [2, 4]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Dhiraj"));
console.log(Array.from("Dhiraj"));
console.log(Array.from({ name: "Dhiraj" })); // IMPORTANT

let score1 = 100
let score2 = 200
let score3 = 300

const scores = Array.of(score1, score2, score3)

console.log(scores);


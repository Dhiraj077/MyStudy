// let a = 20
// const b = 30
var c = 500;

if (true) {
  let a = 20; //let anad const are blocked scopes and var is global scope
  const b = 30;
  //   var c = 50;
  //   console.log(`Inner: ${a}`);
}

// console.log(a);
// console.log(b);
console.log(c);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
  const username = "Dhiraj";

  function two() {
    const website = " Youtube";
    console.log(username + website);
  }
  //    console.log(website);
  two();
}

// one();

if (true) {
    const username = "Dhiraj"
    if (username === "Dhiraj") {
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++ interesting +++++++++++++++++

console.log(addone(5));
function addone(num) {
     return num + 1
}


const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(6));
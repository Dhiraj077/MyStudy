function sayMYName() {
  console.log("D");
  console.log("H");
  console.log("I");
  console.log("R");
  console.log("A");
  console.log("J");
}

// sayMYName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(numb1, numb2) {
  // let result = numb1 + numb2
  // return result
  return numb1 + numb2;
}

// addTwoNumbers(6, null)

const result = addTwoNumbers(4, 5);
// console.log(`The sum is ${result}`);

function loginUserMessage(username = "sam") {
  // if(username === undefined){
  //      console.log("Please enter a username");
  //      return
  // }

  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("Dhiraj"));
// console.log(loginUserMessage("Dhiraj"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(30));
// console.log(calculateCartPrice(30, 300, 244));

const user = {
    username: "Dhiraj",
    price: 144
}

function handleObject(anyobject) {
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 662
})


// ------------------------------------------------------
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

// ***********************

const mySecArray  = [4,3,4,6,'434',656,4]

function returnForthValue(getValue) {
    return getValue[3]
}

console.log(returnForthValue(mySecArray));
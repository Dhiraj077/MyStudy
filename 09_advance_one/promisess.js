<<<<<<< HEAD
const promiseOne = new Promise(function (resolve, reject) {
  // Do an asyn task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve("I'm done!");
  }, 1000);
});

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(4);
  }, 1000);
}).then(function () {
  console.log("Async task 2  finished");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Dhiraj", email: "dhraj@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Dhiraj", password: "123" });
    } else {
      reject("Error: Invalid Credentials!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log('The promise either resolve or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'JavaScript',  message:'Promise Resolved'})
        } else{
            reject('Error: JS went worng')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch(error){
    console.log(error);
   }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('E: ', error);
})
=======
const promiseOne = new Promise(function (resolve, reject) {
  // Do an asyn task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve("I'm done!");
  }, 1000);
});

// promiseOne.then(function(){
//     console.log('Promise consumed');
// })

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(4);
  }, 1000);
}).then(function () {
  console.log("Async task 2  finished");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Dhiraj", email: "dhraj@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Dhiraj", password: "123" });
    } else {
      reject("Error: Invalid Credentials!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log('The promise either resolve or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'JavaScript',  message:'Promise Resolved'})
        } else{
            reject('Error: JS went worng')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch(error){
    console.log(error);
   }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('E: ', error);
})
>>>>>>> 8b21b92d45d1f3364797126efa50570bb436d0cd

<<<<<<< HEAD
function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email
    this.password = password;
}

const user  = new createUser('dhiraj', 'd@123.com', 'pass');
console.log(user);
=======
function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email
    this.password = password;
}

const user  = new createUser('dhiraj', 'd@123.com', 'pass');
console.log(user);
>>>>>>> 8b21b92d45d1f3364797126efa50570bb436d0cd

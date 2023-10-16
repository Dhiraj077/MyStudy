const accountID = 1443332
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//  accountId = 3 // not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hv.com"
accountPassword = '6'
accountCity = "Mumbai"

console.log(accountEmail);

console.table([accountID, accountEmail, accountPassword, accountCity])
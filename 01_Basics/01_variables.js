const accountId = 121212
let accountEmail = "ronitz@gmail.com"
var accountPassword = "12345"
accountCity = "Morbi"
let accountState;


// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "13335"
accountCity = "Rajkot"


// console.log(accountId);

/*
Prefer not to use var
because of issue of in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

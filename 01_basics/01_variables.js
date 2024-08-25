console.log("Variables in JS");

const accountId = 144553;
let accountEmail = 'ashishsfdc123@gmail.com';
var accountPassword = "12345";
//without even specifying the type of variable, we can directly use identifier and assign value to it
accountCity = 'Jaipur';
//if we declare a value, and does not assign value to it, its value is undefined
let accountState;

// accountId = 2;

accountEmail = 'ashish.cs.er@gmail.com';
accountPassword = 'NewPassword';
accountCity = 'Jodhpur';

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/**
 * there were issues in scoping of variables(blcok and functional)
 * Thats why let and const were introduced.
 */


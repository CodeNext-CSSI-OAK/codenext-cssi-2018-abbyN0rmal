// Author: FirstName LastName
//Abby Guerrero
//console.log("Hello Code Next");
////console.log(1 + 1);
//console.log("1 + 1");
let readline = require('readline-sync');

let name = Number (readline.question('what is your age?'));

let ageAsAString = readline.question('what is your age?') ;
let age = Number(ageAsAString);

console.log('In 2028, you will be ' + (age + 10) + 'years old.');

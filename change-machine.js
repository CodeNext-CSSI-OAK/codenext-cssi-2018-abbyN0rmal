// Author: Abby Guerrero

console.log("________________________________________________________________________________________");

console.log("BLEEP! bLOOP! Welcome to your personal cHaNgE maChInE!");

let readline = require ("readline-sync");
let amount = Number(readline.question("Please enter your amount with positive numbers: "));

let Quarters = Math.floor (amount / 25) ;
console.log("Your amount in Quarters = " + Quarters);

let remainderAfterQuarters = Math.floor(amount % 25);
let Dimes = Math.floor( remainderAfterQuarters / 10);
console.log("Your amount in Dimes = " + Dimes);

let remainderAfterDimes = Math.floor( remainderAfterQuarters % 10);
let Nickels = Math.floor( remainderAfterDimes / 5);
console.log("Your amount in Nickels = " + Nickels);

let remainderAfterNickels = Math.floor( remainderAfterDimes % 5);
let Pennies = Math.floor( remainderAfterNickels / 1);
console.log("Your amount in Pennies = " + Pennies);

console.log("This is your total amount converted into COINS!!");

console.log("________________________________________________________________________________________");

let readline = require('readline-sync');


let correctPassword = "badabing";
//set up the password
let input = "";
//empty string
let attempts = 0;
while (input !== correctPassword && attempts <= 2) {
//while the input does not equal the correctPassword then it's going to ask again
  input = readline.question("please enter the correct password: ");
  attempts++;
//what they enter here will then move into the input let statement
}

if (input === correctPassword) {
  console.log("Correct!");
} else {
console.log("Wrong! You are a robot!");
}

// Author: Abby Guerrero
var readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/
function printGreeting() {
console.log(
`
******************************************************************************
                                  Hello, Welcome!
                                  By: Abby Guerrero
                          This is a Talking Number maching

*******************************************************************************
`);
}


/******************************************************************************
  This function takes a number between 1 and 9 (inclusive) as input and returns
  that same number in word form. If the number is not between 1 and 9, the
  function returns an empty string, which is just "".

  Examples:
  sayZeroNine(5) → "five"
  sayZeroNine(8) → "eight"
  sayZeroNine(13) → ""
*******************************************************************************/
function sayZeroNine(num) {
  if (num < 1 || num > 9){
    return "" ;
  } else if (1 === num) {
    return "one";
  } else if (2 === num){
    return "two";
  } else if (3 === num){
    return "three";
  } else if (4 === num){
    return "four";
  } else if (5 === num){
    return "five";
  } else if (6 === num){
    return "six";
  } else if (7 === num){
    return "seven";
  } else if (8 === num){
    return "eight";
  } else {
    return "nine";
  }

}

/******************************************************************************
  This function takes a number between 10 and 19 (inclusive) as input and returns
  that same number in word form. If the number is not between 10 and 19, the
  function returns an empty string, which is just "".

  Examples:
  sayTenNineteen(11) → "eleven"
  sayTenNineteen(15) → "fifteeen"
  sayTenNineteen(25) → ""
*******************************************************************************/
function sayTenNineteen(num) {
//let num = Number(readline.question ("enter a number between 10 and 19"));
if (num < 10 || num > 19){
  return "" ;
} else if (11 === num) {
  return "eleven";
} else if (12 === num){
  return "twelve";
} else if (13 === num){
  return "thirteen";
} else if (14 === num){
  return "fourteen";
} else if (15 === num){
  return "fifteen";
} else if (16 === num){
  return "sixteen";
} else if (17 === num){
  return "seventeen";
} else if (18 === num){
  return "eighteen";
} else {
  return "nineteen";
}

}

/******************************************************************************
  This function takes a number between 2 and 9 (inclusive) as input and returns
  that same number in word form, but in the tens place. If the number is not
  between 2 and 9, the function returns an empty string, which is just "".

  Examples:
  sayTwentyNinety(5) → "fifty"
  sayTwentyNinety(8) → "eighty"
  sayTwentyNinety(1) → ""
*******************************************************************************/
function sayTwentyNinety(num) {
  if (num < 20 || num > 29){
    return "" ;
  } else if (21 === num) {
    return "twentyone ";
  } else if (22 === num){
    return "twentytwo";
  } else if (23 === num){
    return "twentythree";
  } else if (24 === num){
    return "twentyfour";
  } else if (25 === num){
    return "twentyfive";
  } else if (26 === num){
    return "twentysix";
  } else if (27 === num){
    return "twentyseven";
  } else if (28 === num){
    return "twentyeight";
  } else {
    return "twentynine";
  }
}

/******************************************************************************
  This function calls the three functions above to convert an entire number (num)
  into word form, then returns that word. This function should be able to handle
  numbers from 0 to 9999 (inclusive).

  To do this, first declare a variable named wordForm at the top of the
  function. This will be the string you will return at the end of the function,
  so initialize it to an empty string at the start: var wordForm = "";

  Your first conditional statement should check if num is equal to 0. If so,
  set wordForm to the string "zero".

  Otherwise, build the word form of num by chopping num into thousands,
  hundreds, tens, and ones. Convert each place value number to a word by calling
  the three functions above, and concatenate each word with the wordForm variable.

  At the very end of your function it should simply return wordForm.

  Examples:
  sayNumber(0) → "zero"
  sayNumber(9999) → "nine-thousand nine-hundred ninety-nine"
  sayNumber(75) → "seventy-five"
*******************************************************************************/
function sayNumber(num) {

}

/******************************************************************************
  This function simply runs your program. At the very least it should greet the
  user, ask the user to enter a number between 0 and 9999, then print that
  number in word form.
*******************************************************************************/
function run() {
printGreeting();
let amountN = Number ( readline.question("enter a number~"));
console.log(sayZeroNine(amountN));
console.log(sayTenNineteen(amountN));
console.log(sayTwentyNinety(amountN));
}

// Run the program!
run();

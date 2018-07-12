// Abby Guerrero
//this is meant to define the function
function subtract(num1 = 0, num2 = 0){
 return num1 - num2 ; //key word, "return" returns the value

 //firts you must return it to then use it later
}
//this is meant to actually call the function
let result = subtract(6,4);
console.log('the result is : ' + result);
//both of these are the same its just that the bottom one is much shorter
 console.log('the result is ' + subtract(6, subtract(100,99))); //java simplifies from the inside-out

subtract();
subtract(6);
subtract(6,4);
subtract(6, 4, 5);

///////////////////////////////////////////////////////////////////////////////
function absoluteDifference(num1, num2) {
  if(num2 > num1) {
    return num2 - num1;
  }
  return num1 - num2;
}

console.log(absoluteDifference (6,4));
console.log(absoluteDifference(4,6));

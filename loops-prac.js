let readline = require('readline-sync');


// let correctPassword = "badabing";
// //set up the password
// let input = "";
// //empty string
// let attempts = 0;
// while (input !== correctPassword && attempts <= 2) {
// //while the input does not equal the correctPassword then it's going to ask again
//   input = readline.question("please enter the correct password: ");
//   attempts++;
// //what they enter here will then move into the input let statement
// }
//
// if (input === correctPassword) {
//   console.log("Correct!");
// } else {
// console.log("Wrong! You are a robot!");
// }

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let i = 0; i < alphabet.length; i++) { //this works as a loop!
//   console.log(alphabet.charAt(i));
// }

//you only need 2 semicolens!!!
// for (let count = 0; count <= 30; count++) {
//   console.log(count);
// }


//use this for a list of things, and when you know something should stop because this is a list
// let students = "MFAD";
// for(let i = 0; i < students.length; i++){
//   console.log('give' + student.charAt(i)+ 'a cookie');
// }
//
// let i = 0;
// while(i < student.length) {
//   console.log('give' + students.charAt(i) + 'a cookie');
//   i++;
// }
//
// //dont know when something should stop, only when they get that answer or the required input
// let correctPassword = 'hamza';
// for (let input = ''; correctPassword!== input;){
//   input = readline.question('enter password: ');
// }

//let's say the string is "google"
// function containsSpace(str) {
//   for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) === " "){
//       return true;
//     }
//   }
//   return false;
// }
//
// console.log(containsSpace('star wars'));
// console.log(containsSpace('starwars'));
// console.log(containsSpace(''));
// console.log(containsSpace('        '));

// //this was my code before! _______________________________________________________________________
// function countAs(str){
//   for(let countAs = 0; countAs < str.length; countAs++);{
//       return countAs++;
//   }
// }
// // _________________________________________________________________________________________________

// function countAs(str){
//   let count = 0;
//   for(let i = 0; i < str.length; i++){
//     if (str.charAt(i) === "a" || str.charAt (i) === "A"){
//         count++;
//     }
//   } //dont put the return here because you're still in the for loop
//   return count;
// }
// console.log(countAs("happy"));
// console.log(countAs("caca"));
// console.log(countAs(" "));
// console.log(countAs("aaaaaaaaaaaassasaasaaaaasasaaaaaaaaa"));



//banana
function reverseString(str){
  let reversed = "";
  for(let i = str.length -1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

console.log(reverseString('banana'));
console.log(reverseString('caca'))

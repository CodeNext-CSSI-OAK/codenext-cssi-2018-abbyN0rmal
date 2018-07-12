// Author: FirstName LastName
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                        by Abby Guerrero");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
 console.log("you walk upstairs and you hear a piano playing past a door at the end of the hallway");
    let enterDoor = readline.question ("Will you enter the door? (yes or no)");
    if (enterDoor === "y" || enterDoor === "yes"){
    console.log("There are hands playing on the piano and ONLY hands");
    console.log("Where is the owner of these hands? *you hear something behind you*");
}
    let turnAround = readline.question ("will you choose to turn around?");
    if (turnAround === "y" || turnAround === "yes"){
    console.log("You have died!!!");
    } else {}

console.log("_______________________________________________________________________");
console.log("Thanks for playing!");

// Author: Abby Guerrero
let readline = require("readline-sync");

// global variables
let firstName, lastName, momMaidenName, cityBorn, dreamCar, street, fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  return firstName.substring(0,3) + lastName.substring(0,2).toLowerCase();

}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
  return momMaidenName.substring(0, 3) + cityBorn.substring(0, 3).toLowerCase();
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  let thirdToLast = lastName.charAt (lastName.length -3);
  let secondToLast = lastName.charAt (lastName.length -2);
  let last = lastName.charAt(lastName.length -1);
  return last.toUpperCase() + secondToLast + thirdToLast + dreamCar.substring().toLowerCase();
  //return lastName.charAt(1) + lastName.charAt(2) + lastName.charAt(3) + dreamCar.toLowerCase();
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  return getTitle() + " " + street;
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
 firstName = readline.question("Input your first name: "); //identify the functions like this!!
 lastName = readline.question("Input your last name: ");
 momMaidenName = readline.question("Input your mother's maiden name:");
 cityBorn = readline.question("Input the city you were born in:");
 dreamCar = readline.question("Input your dream car: ");
 street = readline.question("Input the street you live in: ");


 console.log(getNewFirstName() + " " + getNewLastName() + " of " + getHonorific());
 //use this only when you're done with the functions
}

// Run the program!
run();

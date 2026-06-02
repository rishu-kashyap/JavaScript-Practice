/*Conditional statements if...else if...else*/
/*Example: //
 if(true){
     console.log("The condition is true");
 }

 const isRaining = false;

 if(isRaining){
     console.log("It's raining, take an umbrella!");
 }
 else{
     console.log("It's not raining, no need for an umbrella.");
 }
*/
const readlineSync = require('readline-sync');

/*const userAge = readlineSync.question("Please enter your age: ");

const legalDrivingAge = 18;

if(userAge >= legalDrivingAge){
    console.log("You are old enough to drive.");
}else{
    console.log("You are not old enough to drive.");
}*/

//FizzBuzz problem

const number = Number(readlineSync.question("Please enter a number: "));

const remainder = number % 3;
const remainder1 = number % 5;
const remainder2 = number % 7;

if(remainder === 0 && remainder1 === 0 ){
    console.log("The number is fizz.");
}
else if(remainder === 0 || remainder1 === 0){
    console.log("The number is buzz.");
}else if(remainder2 === 0){
    console.log("BuzzBuzz.");
}else{
    console.log("The number is neither fizz nor buzz.");
}
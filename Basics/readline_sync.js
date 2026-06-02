/** read data from variable */
const readlineSync =require("readline-sync");
const userName = readlineSync.question("What is your name? ");

console.log("Hello " + userName + "!");

console.log(`Hello ${userName}! Welcome to type conversion`);

const yearofBirth = readlineSync.question("Enter your year of birth: ");

const age = 2024 - Number(yearofBirth);
console.log(`You are ${age} years old`);
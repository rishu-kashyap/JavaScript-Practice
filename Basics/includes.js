/**
 * includes
 * arrr.includes(any)
 */

const availablesize = ["S","M","L","XL"];
const readlineSync = require("readline-sync");
const usersize = readlineSync.question("Which size of shirt do you want (S/M/L/XL)").toUpperCase();

const issizeAvailable = availablesize.includes(usersize)
if(issizeAvailable){
    console.log("Size is Available");

}else{
    console.log("Size is not available");
}



// 2nd Programme 

const colors = ["red", "blue", "green"];
console.log(colors.includes("blue"));  // true
console.log(colors.includes("yellow")); // false



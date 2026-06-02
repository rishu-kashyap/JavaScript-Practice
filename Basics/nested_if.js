var readlineSync = require('readline-sync');

const number = readlineSync.question("Enter a number:");

if(number%2===0){
    console.log(`${number} is even.`);
}else{
    console.log(`${number} is odd.`);
}
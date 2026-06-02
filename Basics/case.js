
const message ="I am Rishu Kumar and I am 21 year old";

console.log(message.toUpperCase());

console.log(message);

console.log(message.toLowerCase());



let data = [ 'javascript', 'html', 'css' ];

let result = data.map(data => data.toUpperCase());

console.log(result);


let url = "https://www.geeksforgeeks.org/javascript/javascript-tutorial/";
let domai = url.substring(8, 29); // Extract the domain
let path = url.substring(29);      // Extract the path

console.log(domai);
console.log(path);


/**
 * sort array
 */

const fruits =["Apple ","Banana","Orange","Cheery"];
fruits.sort();
console.log(fruits);


// const number =["1","4","3","2","11"];
// number.sort();
// console.log(number);


const number =["1","4","3","2","11"];

function sortInascending(a,b){
    return a-b;
}
number.sort(sortInascending);
console.log(number);
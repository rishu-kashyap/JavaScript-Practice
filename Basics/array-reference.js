/**
 * 
 */

const arr1 =[1,2,3];

const arr2 = arr1;

//Shallow copy

console.log("Arr1-",arr1)
console.log("Arr2-",arr2);

arr2.push(4);

console.log("Updated Arr1-",arr1)
console.log("Updated Arr2-",arr2)

//Spread Operator

let arr3 =[...arr1];
console.log("Arr3 -",arr3);
arr3.push(5);

console.log("Updated arr1 -",arr1);
console.log("Updated arr3 -",arr3);

// for loop

let arr4 =[1,2,3,4];
let arr5 =[];
for(let number of arr4){
    arr5.push(number)
}

arr5.push(5);
console.log("Updated Arr4 -",arr4);
console.log("Updated arr5 -",arr5);





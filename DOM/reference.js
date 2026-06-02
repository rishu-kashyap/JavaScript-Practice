/**
 * object Refrence and Shallow Copy
 */

const person1 ={
    name:"Rishu",
    age:24
}

const person2 = Object.assign({},person1);
person2.name = "Prakash";
console.log(person1);
console.log(person2);
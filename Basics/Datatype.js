/**String*/

let username = 'Rishu Kumar';
console.log(typeof username);

/**Number*/

let age = 25;
console.log(typeof age);

/**Boolean*/

let isproductincart =true;
if(isproductincart){
    console.log(typeof isproductincart);
}

/**undefined*/

let address;
console.log(typeof address);

/**null*/

let pincode = null;
console.log(typeof pincode);  // it will show object because of javascript bug

/*object*/

let person = {
    name : 'Rishu Kumar',
    age : 25,
    isEmployed : true
};

console.log(typeof person);

const arr = [1,2,3,4,5];
console.log(typeof arr);  // it will show object because array is a type of object in javascript
/**
 * Optional chaining allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid.
 */


const user ={
    name : "Rishu Mishra",
    age: "21",
    address: {
        city: "SAHARSA",
        //street: "123 Main St",
    },
    likes: "coding music gaming",
    getDisplayMessage: function(){
        console.log("Hello, my name is " + user.name + " and I like " + this.likes + ".");
    }
}
// Accessing nested properties safely using optional chaining
console.log(user.address?.city); // Output: "SAHARSA"
console.log(user.contact?.street); // Output: undefined

// Calling a method safely using optional chaining

user.getDisplayMessage(); // Output: "Hello, my name is Rishu Mishra and I like coding music gaming."
console.log(user.getDisplayaddress?.()); // Output: undefined
console.log(user.hobbies);
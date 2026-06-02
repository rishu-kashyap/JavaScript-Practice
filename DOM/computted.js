/**
 * Adding property to an object with computed property name
 * compted property
 */
const readlineSync = require('readline-sync');
const key = readlineSync.question('what do you want to know about your mentor(name, age, gender,state,city)? : ');
const course =readlineSync.question('which course mentor is teaching (MERN, MEAN, JAVA, PYTHON)? : ');
const obj= {
    name : "Prakash",
    age : 24,
    gender :"male",
    [course] : "course not available"
}
obj.city = "Pune"
obj.state = "Maharashtra"
console.log(obj[key]);
console.log(obj[course]);
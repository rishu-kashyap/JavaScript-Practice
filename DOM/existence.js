/**
 * property exisetence check in object
 */

const obj= {
    name : "Prakash",
    age : 24,
    gender  :"male"
}

const ispropertyexist = "age" in obj;
//console.log(ispropertyexist);

for(let key in obj){
    console.log(key +":",obj[key]);
}
/**
 * pop ,slice,splice
 */

 let course = ["HTML","css","js","react"];
 console.log(course)
 let removeditem = course.pop()
 console.log("RI -",removeditem)

 console.log("Updated courses :" ,course)


/**
 * slice
 */

let courses = ["HTML","css","js","react"];

let value = courses.slice(2,3);
console.log(courses);
console.log(value);



 let username = "prakash";
 let firstuppercase = username[0].toUpperCase();

 let capname = firstuppercase+username.slice(1);

 console.log(capname);


 /**
  * splice
  */

 let cours = ["HTML","css","js","react","vue.js"];

 cours.splice(3,4);

 console.log(cours);


let studentnam = ["Rishu","Rishi","ADITYA",{schoolname: "St Xaviers school"}]
// console.log(studentnam);



// let studentname = ["Rishu","Rishi","ADITYA",{schoolname: "St Xaviers school"}]
// console.log(studentname[0]);

console.log(studentnam.length)

for(let i=0 ; i<4 ; i++){
    console.log(studentnam[i])
}




/*for let of*/

for(let name of studentnam){
    console.log(name)
}


/*for let in */

for(let index  in studentnam){
    console.log(studentnam[index])
}
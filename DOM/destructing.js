let obj ={
    name: "Rishu Mishra",
    age: 30,
    address: { 
        state: "Bihar", 
        city: "Saharsa",
        zip: "852201"
    },
    hobbies: ["reading", "chess", "hiking"]
}
// Destructuring assignment to extract properties from the object
 let {name, age, }= obj;
 console.log(name); // Output: "Rishu Mishra"
 console.log(age);  // Output: 30


 let {name: UserNamme}=obj
 console.log(UserNamme); // Output: "Rishu Mishra" // Output: undefined


 let {address: {city, zip}}= obj;
 console.log(city); // Output: "Saharsa"
 console.log(zip);  // Output: "852201"

const employees ={
    engineers: {
        emp1: { name: "Alice", age: 28  },
        emp2: { name: "Bob", age: 32,
            achivements:{
                award: "Best Engineer 2023",
                patents: 5,
                awards: "Innovation Excellence"
            }
          },
    },
    Gamers: {
        emp3: { name: "Charlie", age: 25  },
        emp4: { name: "David", age: 30  },
    },
    youtubers: {
        emp5: { name: "Eve", age: 22  },
        emp6: { name: "Frank", age: 27  },
    }
}

let {engineers: {emp2:{achivements:{award,patents,awards}}}}= employees;
console.log(patents,award); // Output: "Bob"
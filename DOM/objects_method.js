const obj ={
    name: "Rishu Mishra",
    age: 30,
    city: "Saharsa",
}

const entries = Object.entries(obj);
console.log(entries);
// Output: [ [ 'name', 'Rishu Mishra' ], [ 'age', 30 ], [ 'city', 'Saharsa' ] ] 
//Arrays of array returned

const keys = Object.keys(obj);
console.log(keys);
// Output: [ 'name', 'age', 'city' ]
//Array of keys returned

const values = Object.values(obj);
console.log(values);
// Output: [ 'Rishu Mishra', 30, 'Saharsa' ]
//Array of values returned
/**
 * Function borrowing call, Apply and Bind
 */

const user1 = {
    name:"Rishu",
    age:19,
    displaymessage(){
        //Implict Binding
        console.log(this.age);
    },
};

const user2 = {
    name:"Piyush",
    age:190,
};

const user3 = {
    name:"Rudransh",
    age:171,
};

function sayhi(degree,year){
        console.log(this.name,degree,year)
    };

user1.displaymessage();

//Explict  Binding
sayhi.call(user1,"B-Tech",2028);
sayhi.call(user2,"BCA",2027);

sayhi.apply(user1,["B-Tech",2028]);
sayhi.apply(user2,["B-Tech",2028]);

const result = sayhi.bind(user3,"B-Tech - CS");
result(2026);
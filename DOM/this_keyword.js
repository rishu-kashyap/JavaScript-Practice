/**
 * This Keyword
 * Refers to the object  that is executing the function
 */
const obj ={
    name : "Rishu",
    displaymessage : function(){
        console.log("Helllo"+this.name); //Implict Binding

    },
};
function calculatesum(){
    console.log(this);
}

calculatesum();
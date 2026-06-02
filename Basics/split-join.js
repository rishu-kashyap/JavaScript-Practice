/**
 * split and join
 */

const inputstr = "Rishu";
const rev = inputstr.split("");
rev.reverse();
const revstr = rev.join("")
console.log(revstr);

if(inputstr===revstr){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome");
}
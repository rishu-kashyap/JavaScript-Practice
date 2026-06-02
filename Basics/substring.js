
const username = "Rishu Kashyap";

const substring = username.substring(0,5);

console.log(substring + ".....");



let email = "user@example.com";
let domain = email.substring(email.indexOf('@') + 1);

console.log(domain);


let fName = "report.pdf";
let ext = fName.substring(fName.lastIndexOf('.') + 1);

console.log(ext);
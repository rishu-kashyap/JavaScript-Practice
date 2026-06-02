var Add = document.querySelector("#add");
var Remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector("ul");

var li;


Add.addEventListener("click",function(){

    if(inp.value.trim()===''){}
    else{
        li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = "";

    }

})
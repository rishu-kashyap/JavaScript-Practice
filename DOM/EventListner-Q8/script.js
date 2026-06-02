var prg = document.querySelector("#progress")

var count = 0;
setInterval(function(){
    count++;
    prg.style.width = count+ "%";
},100);
//form ko submit krne pr reload se roakna hai

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type = "text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    //Not a proper method to solve these types of question
    // if(inp1.value ===''|| inp2.value===''){
    //     h4.textContent = "Error, Some field are blank"
    //     h4.style.color = "red"
    // }
    // else{
    //     h4.textContent = "";
    // }

    for(var i = 0 ; i<inps.length;i++){
        if(inps[i].value.trim() === ''){
            h4.textContent="Error, some fields are blank";       
            h4.style.color="Red"
             break;
        }else{
            h4.textContent='';
        }

    }
})
var input = document.querySelector("input");
var data =[
    {name: "Harsh",src :"https://images.unsplash.com/photo-1776728029175-c6b9d807c6b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "harshita",src :"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww "},
    {name: "harshika",src :"https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww"},
    {name: "shyam",src :"https://images.unsplash.com/photo-1651097681179-c64917595ff2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D "}
]

var pers = " ";
data.forEach(function(elem){
     pers += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h3>${elem.name}</h3>
          </div>`
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var matching =data.filter(function(e){
       return e.name.startsWith(input.value);

    })
    var newuser = " ";
   matching.forEach(function(elem){
     newuser += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h3>${elem.name}</h3>
          </div>`
})

document.querySelector(".people").innerHTML = newuser;
    
});
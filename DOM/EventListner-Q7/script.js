// var img = document.createElement("img");

// img.src = "https://cdn.pixabay.com/photo/2025/03/03/17/47/cliffs-9444605_1280.jpg"


// document.querySelector("body").appendChild(img);
// document.querySelector("body").removeChild(img);


//Event list

var btn = document.querySelector("button");

btn.addEventListener("mouseover", function(){
        btn.textContent = "Starting....";
        btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseleave", function(){
        btn.textContent = "make a new card....";
        btn.style.backgroundColor = "white";
});


//Event object


document.querySelector("body")


// .addEventListener("mousemove", function(){
//       console.log("moving....");
// })
//
.addEventListener("mousemove", function(dets){
      console.log(dets);
})
var hello = document.querySelector(".text-one");
var work = document.querySelector(".text-two");
var hobbie = document.querySelector(".text-three");
var query = document.querySelector(".name");
var input = document.querySelector("input");
var lengthAns = document.querySelector(".answer");
var goodbye = document.querySelector(".text-four");

setTimeout(function() {
  hello.style.display = "block";
}, 1000);

setTimeout(function(){
  work.style.display = "block";
}, 2000);

setTimeout(function(){
  hobbie.style.display = "block";
}, 3000);

setTimeout(function(){
  query.style.display = "block";
}, 4000);

setTimeout(function(){
  input.style.display = "block";
}, 5000);

  input.addEventListener("keyup", function(e) {
    e.preventDefault();

      if (e.keyCode === 13){

        if (input.value.length > 1){
          setTimeout(function(){
            if (input.value.length > 6){
              lengthAns.textContent = "That's a long name!";
              lengthAns.style.display = "block";
            } else {
              lengthAns.textContent = "That's a short name!";
              lengthAns.style.display = "block";
            }
            }, 1000);
            setTimeout(function(){
            goodbye.style.display = "block"
            goodbye.textContent = "Nice to meet you, " + input.value + "!";
          }, 3000);
        } else {
        alert("Please write your complete name!");
        }
      }
      });

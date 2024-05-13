const email= document.querySelector(".email");

const submit= document.querySelector(".submit");
const success= document.querySelector(".success");
const warning= document.querySelector(".warning");
const wrong= document.querySelector(".wrong-email");


//share button items
const share = document.querySelector(".share");
const shareBox = document.querySelector(".share-box");


submit.addEventListener("click", checking);
email.addEventListener("keypress",function(e){
  if(e.key === "Enter"){
    checking();
  }
})



function checking(){
    let emailCheck= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(emailCheck)){
        success.classList.toggle("hidden");
        warning.classList.add("hidden");
          wrong.classList.add("hidden");
          let snare = new Audio("./snare.mp3");
            snare.play();
    }else{
        warning.classList.toggle("hidden");
          wrong.classList.toggle("hidden");
          success.classList.add("hidden");
          let crash = new Audio("./crash.mp3");
            crash.play();
    }
  }

  //share button actions

  share.addEventListener("click", function(){
    shareBox.classList.toggle("hidden");
  })

let fStatus = document.querySelector("h5")
let button = document.querySelector(".add")
let check = 0;

button.addEventListener("click",function(){
  if(check == 0){
  fStatus.innerHTML = " Now You Both Are Friends 🤝"
  fStatus.style.color ="#6a97ec"
button.innerHTML = "Remove Friend"
button.style.background = "red"

  check = 1
  }
else{
  fStatus.innerHTML = "Friendship Removed"
  fStatus.style.color ="red"
  button.style.background = "#6a97ec"
button.innerHTML ="Add friend"


check = 0
}

})











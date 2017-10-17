var button = document.querySelector("#mybutton");
var paragraph = document.querySelector("#clock");
var daysLeft = 20;

function countdown(){
  daysLeft = daysLeft - 1;
  paragraph.textContent = daysLeft + " days until the apocalypse";

  if (daysLeft == 0) {
    alert("THE WORLD ENDED");
  }
}

button.addEventListener("click", countdown);

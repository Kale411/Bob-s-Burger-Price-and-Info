var burgerDisplay = document.getElementById("burgerDisplay");

var burgerBtn = document.getElementById("burgerBtn");

var ex = document.getElementsByClassName("ex")[0];

burgerBtn.onclick = function() {
  burgerOfTheDay();
  
  burgerDisplay.style.display = "block";
}

ex.onclick = function() {
  burgerDisplay.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == burgerDisplay) {
    burgerDisplay.style.display = "none";
  }
}

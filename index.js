function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

var title = document.querySelector("#title");

var outcome;

if (randomNumber1 > randomNumber2) {
  outcome = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  outcome = "Player 2 Wins";
} else {
  outcome = "It's a draw";
}

title.innerText = outcome;

setInterval(function() {
   window.location.href = window.location;
}, 3000)

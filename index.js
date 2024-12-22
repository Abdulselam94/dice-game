var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "./assets/d" + randomNum1 + ".jpg";
var randomNum2 = Math.floor(Math.random() * 6 + 1);
var randomImg2 = "./assets/d" + randomNum2 + ".jpg";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player num 1 wins";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player num 2 wins";
} else {
  document.querySelector("h1").innerHTML = "draw!";
}

var score = 0;

function addToScore (amount) {
  score = score + amount;
  document.getElementById("pets").innerHTML = score;
}
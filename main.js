// Form functionality

var newBtnColor = document.getElementById("study");

document.getElementById("study").addEventListener("click", changeBtnColor);

function changeBtnColor() {
  document.getElementById("study").style.backgroundImage = "url("./assets/study-active.svg")";
}

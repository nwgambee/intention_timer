// Form functionality
document.getElementById("study").addEventListener("click", function() {
  document.getElementById("study").style.backgroundImage = "url('assets/study-active.svg')";
  document.getElementById("study").style.borderColor = "#B3FD78";
  document.getElementById("study").style.color = "#B3FD78";
});

document.getElementById("meditate").addEventListener("click", function() {
  document.getElementById("meditate").style.backgroundImage = "url('assets/meditate-active.svg')";
  document.getElementById("meditate").style.borderColor = "#C278FD";
  document.getElementById("meditate").style.color = "#C278FD";
});

document.getElementById("exercise").addEventListener("click", function() {
  document.getElementById("exercise").style.backgroundImage = "url('assets/exercise-active.svg')";
  document.getElementById("exercise").style.borderColor = "#FD8078";
  document.getElementById("exercise").style.color = "#FD8078";
});

// Prevent letters in the minutes/seconds input fields:
document.querySelector("#minutes").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

document.querySelector("#seconds").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

// on start activity click, hide .left-section and show .run-timer element
document.querySelector('#start-activity').addEventListener("click", function() {
        var leftSection = document.querySelector('.left-section');
        var timerSection = document.querySelector('.run-timer');
        leftSection.parentNode.replaceChild(timerSection, leftSection);
});


// on click, replace timer values and activity value with values from input fields
var inputMin = document.querySelector('#minutes');
var inputSec = document.querySelector('#seconds');
var timeLeftMin = document.querySelector('.timer-minute');
var timeLeftSec = document.querySelector('.timer-second');
var placeHold = document.querySelector('h3')
var inputActivity = document.querySelector('.big-input')
var startActivityBtn = document.querySelector('#start-activity');

startActivityBtn.addEventListener("click", addTimerValues)

function addTimerValues() {
  timeLeftMin.innerHTML = inputMin.value;
  timeLeftSec.innerHTML = inputSec.value;
  placeHold.innerHTML = inputActivity.value;
  var changeSubheader = document.querySelector('.left-subheader');
  changeSubheader.innerText = 'Current Activity';
};



// Error messages

// startActivityBtn.addEventListener("click", inputError);
// function inputError() {
//   if (inputMin === "") {
//   } else {
//
//  }
//
//



// If the Start Activity button is clicked before the user has entered
// information into all four inputs, the user will receive an error message,
//but will not lose any information that was provided.
//
// function validateForm() {
//   var formComplete = document.querySelector[".inputs"].value;
//   if (formComplete == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

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
        timerSection.classList.remove('hidden');
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
// Got timer to count backwards for seconds input and stop at 0 seconds in the console.

var begin = document.querySelector(".timer-button");
begin.addEventListener("click", countdown);

function countdown() {
  setInterval (timer, 1000)
  var minLeft = inputMin.value;
  var secLeft = inputSec.value;

  function timer() {
    console.log(parseInt(secLeft));
    if (secLeft == 0 && minLeft == 0) {
      alert("DONE!");
      return;
    };
    parseInt(secLeft -=1);
  };

};

// setInterval(timer, 1000)
//     if (timeLeft === 0) {
//       clearInterval(timer);
//       alert(DONE);
//       return;
//     };
/*

Create a function called timer
Set an interval for the function to run every second
every time it runs it should subtract 1 from the seconds displayed
every time the seconds reach 0 they should reset to 59
every time the seconds reach 0 the function should subract 1 from the minutes
when both equal 0 an alert should be displayed
and the function should stop




 */


// };
//
//
// function toggleTimer() {
//   var toggle = document.querySelector('.hidden');
//   if (toggle.style.display === "none") {
//     toggle.style.display = "block";
//   } else {
//     toggle.style.display = "none";
//   }
// }

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

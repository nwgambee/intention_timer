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
  if (inputMin.value < 10) {
    timeLeftMin.innerHTML = "0" + inputMin.value;
  } else {
    timeLeftMin.innerHTML = inputMin.value;
  };
  if (inputSec.value < 10) {
    timeLeftSec.innerHTML = "0" + inputSec.value;
  }
  else {
    timeLeftSec.innerHTML = inputSec.value;
  };
  // timeLeftSec.innerHTML = inputSec.value;
  placeHold.innerHTML = inputActivity.value;
  var changeSubheader = document.querySelector('.left-subheader');
  changeSubheader.innerText = 'Current Activity';
};

// This allows users to start a timer by entering the desired minutes and seconds and clicking start.
var begin = document.querySelector(".timer-button");
begin.addEventListener("click", countdown);

function countdown() {
  setInterval (timer, 1000)
  var minLeft = inputMin.value;
  var secLeft = inputSec.value;

  function timer() {
    if (secLeft == 0 && minLeft == 0) {
      alert("DONE ZO!");
      return;
    };
    parseInt(secLeft -= 1);

    if (secLeft < 0) {
      parseInt(minLeft -= 1);
      secLeft = 59;
    };

    if (parseInt(secLeft) < 10) {
      timeLeftSec.innerHTML = "0" + parseInt(secLeft);
    } else if (parseInt(secLeft) >= 10) {
      timeLeftSec.innerHTML = parseInt(secLeft);
    } else if (parseInt(secLeft) === 0) {
      timeLeftSec.innerHTML = "00";
     };

    if (parseInt(minLeft) < 10) {
      timeLeftMin.innerHTML = "0" + parseInt(minLeft);
    } else if (parseInt(minLeft) >= 10) {
      timeLeftMin.innerHTML = parseInt(minLeft);
    };
  };
};




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

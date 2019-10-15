// Select only one activity button at a time and make "start timer" button border color
// match selected activity button color
var studyBtn = document.querySelector("#study");

studyBtn.addEventListener("click", function() {
    studyBtn.classList.remove("study-default");
    studyBtn.classList.add("study-active");
    meditateBtn.classList.remove("meditate-active");
    meditateBtn.classList.add("meditate-default");
    exerciseBtn.classList.remove("exercise-active");
    exerciseBtn.classList.add("exercise-default");
});

var meditateBtn = document.querySelector("#meditate");

meditateBtn.addEventListener("click", function() {
  meditateBtn.classList.remove("meditate-default");
  meditateBtn.classList.add("meditate-active");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
  exerciseBtn.classList.remove("exercise-active");
  exerciseBtn.classList.add("exercise-default");
});

var exerciseBtn = document.querySelector("#exercise");

exerciseBtn.addEventListener("click", function() {
  exerciseBtn.classList.remove("exercise-default");
  exerciseBtn.classList.add("exercise-active");
  meditateBtn.classList.remove("meditate-active");
  meditateBtn.classList.add("meditate-default");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
});


var timerButton = document.querySelector(".timer-button");

document.querySelector('#start-activity').addEventListener("click", function() {
  if (studyBtn.classList.contains("study-active")) {
    timerButton.style.borderColor = "#B3FD78";
  } else if (meditateBtn.classList.contains("meditate-active")) {
    timerButton.style.borderColor = "#C278FD";
  } else if (exerciseBtn.classList.contains("exercise-active")) {
    timerButton.style.borderColor = "#FD8078";
  };
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

// on start activity click, hide .left-section and show .run-timer element as long as all four fields are valid
var descriptionForm = document.querySelector(".big-input");
document.querySelector('#start-activity').addEventListener("click", formValidation);

  function formValidation() {
    var studyBtnClicked = studyBtn.classList.contains("study-active");
    var meditateBtnClicked = meditateBtn.classList.contains("meditate-active");
    var exerciseBtnClicked = exerciseBtn.classList.contains("exercise-active");
    var errorCat = document.querySelector("#error-category");
    var errorDesc = document.querySelector("#error-description");
    var errorMin = document.querySelector("#error-minutes");
    var errorSec = document.querySelector("#error-seconds");

    if (descriptionForm.value === "") {
      errorDesc.classList.remove("hidden-warning");
  };
    if (inputMin.value === "") {
      errorMin.classList.remove("hidden-warning");
  };
    if (inputSec.value ==="") {
      errorSec.classList.remove("hidden-warning");
  };
    if (!studyBtnClicked && !meditateBtnClicked && !exerciseBtnClicked) {
        errorCat.classList.remove("hidden-warning");
  };
    if (descriptionForm.value != "" && inputSec.value != "" && inputMin.value != "" && (studyBtnClicked || meditateBtnClicked || exerciseBtnClicked)) {
      switchToTimer();
      addTimerValues();
    };
};

// document.querySelector('#start-activity').addEventListener("click", switchToTimer);

function switchToTimer() {
    var leftSection = document.querySelector('.left-section');
    var timerSection = document.querySelector('.run-timer');
        timerSection.classList.remove('hidden');
        leftSection.parentNode.replaceChild(timerSection, leftSection);
};




// don't allow switch to timerSection unless all 4 forms are filled
// on click, replace timer values and activity value with values from input fields
var inputMin = document.querySelector('#minutes');
var inputSec = document.querySelector('#seconds');
var timeLeftMin = document.querySelector('.timer-minute');
var timeLeftSec = document.querySelector('.timer-second');
var placeHold = document.querySelector('h3')
var inputActivity = document.querySelector('.big-input')
var startActivityBtn = document.querySelector('#start-activity');


function addTimerValues() {
  if (inputMin.value < 10) {
    timeLeftMin.innerHTML = "0" + inputMin.value;
  } else {
    timeLeftMin.innerHTML = inputMin.value;
  }
  if (inputSec.value === "") {
    timeLeftSec.innerHTML = "00";
  }  else if (inputSec.value < 10) {
    timeLeftSec.innerHTML = "0" + inputSec.value;
  }
  else {
    timeLeftSec.innerHTML = inputSec.value;
  }
  // timeLeftSec.innerHTML = inputSec.value;
  placeHold.innerHTML = inputActivity.value;
  var changeSubheader = document.querySelector('.left-subheader');
  changeSubheader.innerText = 'Current Activity';
};

// This allows users to start a timer by entering the desired minutes and seconds and clicking start.
var begin = document.querySelector(".timer-button");
begin.addEventListener("click", countdown);

function countdown() {

  var minLeft = parseInt(inputMin.value) || 0;
  var secLeft = parseInt(inputSec.value) || 0;
  setInterval (timer, 1000)
  function timer() {
    // console.log('secLeft', secLeft);
    // console.log('minLeft', minLeft);
    if (secLeft == 0 && minLeft == 0) {
      timerButton.innerHTML = "DONE-ZO";
      return;
    };
    secLeft -= 1;

    if (secLeft < 0) {
      minLeft -= 1;
      secLeft = 59;
    };

    if (secLeft < 10) {
      timeLeftSec.innerHTML = "0" + secLeft;
    } else if (secLeft >= 10) {
      timeLeftSec.innerHTML = secLeft;
    } else if (secLeft === 0) {
      timeLeftSec.innerHTML = "00";
     };

    if (minLeft < 10) {
      timeLeftMin.innerHTML = "0" + minLeft;
    } else if (minLeft >= 10) {
      timeLeftMin.innerHTML = minLeft;
    };
  };
};

// Select only one activity button at a time and make "start timer" button border color
// match selected activity button color
var studyBtn = document.querySelector("#study");

studyBtn.addEventListener("click", function() {
    studyBtn.classList.remove("study-default");
    studyBtn.classList.add("study-active");
    meditateBtn.classList.remove("meditate-active");
    meditateBtn.classList.add("meditate-default");
    exerciseBtn.classList.remove("exercise-active");
    exerciseBtn.classList.add("exercise-default");
});

var meditateBtn = document.querySelector("#meditate");

meditateBtn.addEventListener("click", function() {
  meditateBtn.classList.remove("meditate-default");
  meditateBtn.classList.add("meditate-active");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
  exerciseBtn.classList.remove("exercise-active");
  exerciseBtn.classList.add("exercise-default");
});

var exerciseBtn = document.querySelector("#exercise");

exerciseBtn.addEventListener("click", function() {
  exerciseBtn.classList.remove("exercise-default");
  exerciseBtn.classList.add("exercise-active");
  meditateBtn.classList.remove("meditate-active");
  meditateBtn.classList.add("meditate-default");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
});


var timerButton = document.querySelector(".timer-button");

document.querySelector('#start-activity').addEventListener("click", function() {
  if (studyBtn.classList.contains("study-active")) {
    timerButton.style.borderColor = "#B3FD78";
  } else if (meditateBtn.classList.contains("meditate-active")) {
    timerButton.style.borderColor = "#C278FD";
  } else if (exerciseBtn.classList.contains("exercise-active")) {
    timerButton.style.borderColor = "#FD8078";
  };
});

// on log activity button click, replace right side p-text with card
var logActivity = document.querySelector('.log');

logActivity.addEventListener('click', function (event) {
  console.log(event);
  var rightSidePH = document.querySelector(".default-message");
  rightSidePH.style.display = "none";
  var card = document.querySelector(".card");
  card.classList.remove("hide-card");
  var cardCategory = document.querySelector(".reason");
  // cardCategory.innerHTML = selected category
  var cardColor = document.querySelector(".indicator");
  if (studyBtn.classList.contains("study-active")) {
    cardColor.style.backgroundColor = "#B3FD78";
    cardCategory.innerHTML = "Study";
  } else if (meditateBtn.classList.contains("meditate-active")) {
    cardColor.style.backgroundColor = "#C278FD";
    cardCategory.innerHTML = "Meditate";
  } else if (exerciseBtn.classList.contains("exercise-active")) {
    cardColor.style.backgroundColor = "#FD8078"; };
    cardCategory.innerHTML = "Exercise";
  var cardTime = document.querySelector(".time");
  cardTime.innerHTML = `${timeLeftMin.innerHTML} MIN ${timeLeftSec.innerHTML} SECONDS`;
  var cardDescription = document.querySelector(".userInput");
  cardDescription.innerHTML = inputActivity.value;

});


class Cards {
  constructor(category, color, minutes, seconds, description) {
    this.minutes = minutes;
    this.category = category;
    this.description = description;
  }
};

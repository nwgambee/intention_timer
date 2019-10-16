// Select only one activity button at a time:
var studyBtn = document.querySelector("#study");

studyBtn.addEventListener("click", selectStudyBtn);
function selectStudyBtn() {
    studyBtn.classList.remove("study-default");
    studyBtn.classList.add("study-active");
    meditateBtn.classList.remove("meditate-active");
    meditateBtn.classList.add("meditate-default");
    exerciseBtn.classList.remove("exercise-active");
    exerciseBtn.classList.add("exercise-default");
};

var meditateBtn = document.querySelector("#meditate");

meditateBtn.addEventListener("click", selectMeditateBtn);
function selectMeditateBtn() {
  meditateBtn.classList.remove("meditate-default");
  meditateBtn.classList.add("meditate-active");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
  exerciseBtn.classList.remove("exercise-active");
  exerciseBtn.classList.add("exercise-default");
};

var exerciseBtn = document.querySelector("#exercise");

exerciseBtn.addEventListener("click", selectExerciseBtn);
function selectExerciseBtn() {
  exerciseBtn.classList.remove("exercise-default");
  exerciseBtn.classList.add("exercise-active");
  meditateBtn.classList.remove("meditate-active");
  meditateBtn.classList.add("meditate-default");
  studyBtn.classList.remove("study-active");
  studyBtn.classList.add("study-default");
};

// make start timer button border color match selected category button
var timerButton = document.querySelector(".timer-button");
document.querySelector('#start-activity').addEventListener("click", matchBorderColor);
function matchBorderColor() {
  if (studyBtn.classList.contains("study-active")) {
    timerButton.style.borderColor = "#B3FD78";
  } else if (meditateBtn.classList.contains("meditate-active")) {
    timerButton.style.borderColor = "#C278FD";
  } else if (exerciseBtn.classList.contains("exercise-active")) {
    timerButton.style.borderColor = "#FD8078";
  };
};

// Prevent letters in the minutes/seconds input fields:
document.querySelector("#minutes").addEventListener("keypress", preventLettersMin);
function preventLettersMin(evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
};

document.querySelector("#seconds").addEventListener("keypress", preventLettersSec);
function preventLettersSec(evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
};

// on 'start activity' click, hide .left-section and show .run-timer element as long as all four fields are valid
document.querySelector('#start-activity').addEventListener("click", formValidation);

function formValidation() {
  var studyBtnClicked = studyBtn.classList.contains("study-active");
  var meditateBtnClicked = meditateBtn.classList.contains("meditate-active");
  var exerciseBtnClicked = exerciseBtn.classList.contains("exercise-active");
  var errorCat = document.querySelector("#error-category");
  var errorDesc = document.querySelector("#error-description");
  var errorMin = document.querySelector("#error-minutes");
  var errorSec = document.querySelector("#error-seconds");
  var descriptionForm = document.querySelector(".big-input");

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

function switchToTimer() {
    var leftSection = document.querySelector('.left-section');
    var timerSection = document.querySelector('.run-timer');
    timerSection.classList.remove('hidden');
    leftSection.parentNode.replaceChild(timerSection, leftSection);
};

// on click, replace timer values and activity description with values from input fields
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
  placeHold.innerHTML = inputActivity.value;
  var changeSubheader = document.querySelector('.left-subheader');
  changeSubheader.innerText = 'Current Activity';
};

// timer countdown functionality
var begin = document.querySelector(".timer-button");
begin.addEventListener("click", countdown);

function countdown() {
  var minLeft = parseInt(inputMin.value) || 0;
  var secLeft = parseInt(inputSec.value) || 0;

  setInterval (timer, 1000)
  function timer() {
    if (secLeft == 0 && minLeft == 0) {
      timerButton.innerHTML = "You did it!";
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

// on log activity button click, replace right side <p> with logged activity card
document.querySelector('.log').addEventListener('click', addCard);
function addCard(event) {
  var rightSidePH = document.querySelector(".default-message");
  var card = document.querySelector(".card");
  var cardCategory = document.querySelector(".reason");
  var cardColor = document.querySelector(".indicator");
  var cardTime = document.querySelector(".time");
  var cardDescription = document.querySelector(".userInput");

  rightSidePH.style.display = "none";
  card.classList.remove("hide-card");
  if (studyBtn.classList.contains("study-active")) {
    cardColor.style.backgroundColor = "#B3FD78";
    cardCategory.innerHTML = "Study";
  } else if (meditateBtn.classList.contains("meditate-active")) {
    cardColor.style.backgroundColor = "#C278FD";
    cardCategory.innerHTML = "Meditate";
  } else if (exerciseBtn.classList.contains("exercise-active")) {
    cardColor.style.backgroundColor = "#FD8078"; };
    cardCategory.innerHTML = "Exercise";

    cardTime.innerHTML = `${inputMin.value} MIN ${inputSec.value} SECONDS`;

    cardDescription.innerHTML = inputActivity.value;
};

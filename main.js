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



// on start activity click, hide .left-section

  document.querySelector('#start-activity').addEventListener("click", function() {
          var leftSection = document.querySelector('.left-section');
          leftSection.style.display = "none";
  });


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

var submitBtn = document.querySelector("#submit");
var quizHeader = document.getElementById("quiz-header");

// set of 4 questions with multiple choice 
function populateQuiz(questions, submitButton, startButton, quizContainer, resultsContainer){


var questions = [
  {
    question: "What are Curly Braces",
    answers: {
      1: "{}",
      2: "[]",
      3: "<>",
    },
    correctAnswer: "1",
  },
  {
    question: "What is a Boolean?",
    answers: {
      1: "A value that expresses only truth",
      2: "A value that expresses only false",
      3: "A value that expresses a truth or false value",
    },
    correctAnswer: "3",
  },

{
  question: "What is BLANK??",
  answers: {
    1: "Dont you worry about BLANK",
    2: "Let me worry about BLANK"",
    3: "Blank STARE",
  },
  correctAnswer: "2",
},

{
question: "What is life?",
answers: {
  1: "vast nothingness",
  2: "its all about the journey",
  3: "Blank STARE some more "
},
correctAnswer: "2",
}

];
}
// for (var i = 0; i < questions.length; i++) {
//   console.log(questions[i]);
// }

function showQuestion() {
  quizHeader.textContent = "What are Curly Braces?";
  // start the timer
  // populate the first question
}
function writePassword() {
  var password = submitPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//const quizContainer = document.getElementById("answer");

//const resultsContainer = document.getElementById("results");
// event listener for submit answer button

//timer function
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textcontent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 100);
}
// window.onload = function () {
//   var threeMinutes = 60 * 3,
//     display = document.querySelector("#time");
//   startTimer(threeMinutes, display);
// };
//<span id="timer"></span>;

var minutes = Math.floor;
//character criteria
function Password() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var symbols = "!@#$%^&*()+";
  var passwordLength = parseInt(prompt("Enter password length?"));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "Invalid password length. Please enter valid password between 8-128 characters";
  }
  var upperYes = confirm("Uppercase letter confirmed"); // true or false
  var lowerYes = confirm("Lower case letter confirmed");
  var numberYes = confirm("Number confirmed");
  var symbolsYes = confirm("symbols confirmed");
  if (!upperYes && !lowerYes && !numberYes && !symbolsYes) {
    return "Invalid selection, must choose at least one.";
  }
  //confirmed selections area
  var confirmedSelections = [];
  if (upperYes) {
    confirmedSelections += upperCase;
  }
  if (lowerYes) {
    confirmedSelections += lowerCase;
  }
  if (numberYes) {
    confirmedSelections += number;
  }
  if (symbolsYes) {
    confirmedSelections += symbols;
  }
  console.log(confirmedSelections);

  //for loops
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * confirmedSelections.length);
    password += confirmedSelections[index];
  }
  console.log(password);
  return password;
}

submitBtn.addEventListener("click", showQuestion);

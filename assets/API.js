var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var results = document.getElementById("results");
var questions = document.getElementById("questions");
var choices = document.getElementById("choices");
var highscoreInitials = document.getElementById("highscore");
var quizContainer = document.getElementById("quiz");
var radioBtn = document.getElementById("radio");
// var totalQuestions = $(".questions").size(4);
var currentQuestion = 0;
var timeLeft = 0;

function generateQuiz(
  questions,
  resultsContainer,
  submitButton,
  quizContainer
) {
  //enter code here.
}
function showQuestions() {
  document.getElementById("questionHere").textContent =
    myQuestions[currentQuestion].question;

  document.getElementById("1").textContent =
    myQuestions[currentQuestion].answer1;

  document.getElementById("2").textContent =
    myQuestions[currentQuestion].answer3;

  document.getElementById("3").textContent =
    myQuestions[currentQuestion].answer2;

  document.getElementById("2").textContent =
    myQuestions[currentQuestion].answer3;

  console.log(myQuestions[currentQuestion]);
}
startBtn.addEventListener("click", () => {
  //currentQuestion++;
  startTimer();
  showQuestions();
});

function evaluateAnswer() {
  // evaluate the answer
  console.log(this.id);
  currentQuestion += 1;
  // evaluate whether or not you're at the end of the questions
  // if no, do this
  showQuestions();
  // if yes, do some kind of end game function
}

// function showResults(questions, quizContainer, resultsContainer) {
//   showResults(questions, quizContainer, resultsContainer);
// }

// //show results when user clicks submit btn

// set of 4 questions with multiple choice

var myQuestions = [
  {
    question: "What are Curly Braces",
    answer1: "{ }",
    answer2: "[ ]",
    answer3: "| |",
    correctAnswer: "1",
  },
  {
    question: "What is a Boolean?",
    answer1: "A value that expresses only truth",
    answer2: "A value that expresses only false",
    answer3: "A value that expresses a truth or false value",

    correctAnswer: "3",
  },

  {
    question: "What is BLANK??",
    answer1: "Dont you worry about BLANK",
    answer2: "Let me worry about BLANK",
    answer3: "Blank STARE",
    correctAnswer: "2",
  },

  {
    question: "Finish the statement-It's just...",
    answer1: "vast nothingness",
    answer2: "water",
    answer3: "JavaScript",
    correctAnswer: "3",
  },
];

// //1Function for- if question is right display correct if is wrong deduct time and display wrong
// // function end screen function that show final score with initials display
// //function that save high score

// // time interval here
function startTimer() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " Seconds to go";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " Second to go";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

//   getQuestions();
//   var startTimer = 60;
// }

// startBtn.addEventListener("click", showQuestion);
// submitBtn.addEventListener("click", showResults);
document.getElementById("1").addEventListener("click", evaluateAnswer);
document.getElementById("2").addEventListener("click", evaluateAnswer);
document.getElementById("3").addEventListener("click", evaluateAnswer);

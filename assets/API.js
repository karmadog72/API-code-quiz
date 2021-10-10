var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var startTimer = document.getElementById("timer");
var results = document.getElementById("results");
var questions = document.getElementById("questions");
var choices = document.getElementById("choices");
var highscoreInitials = document.getElementById("highscore");
var quizContainer = document.getElementById("quiz");

function generateQuiz(
  questions,
  resultsContainer,
  submitButton,
  quizContainer
) {
  //enter code here.
}

function showQuestions(questions, quizContainer) {
  var answerContainers = quizContainer.querySelectorAll(".answers");
  var userAnswer = "";
  var numCorrect = 0;

  for (var i = 0; i < questions.length; i++) {
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "):checked"
      ) || {}
    ).value;
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++;
      answerContainers[i].style.color = "lightblue";
    } else {
      answerContainers[i].style.color = "black";
    }
  }
  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}

function showResults(questions, quizContainer, resultsContainer) {
  showResults(questions, quizContainer, resultsContainer);
}

//show results when user clicks submit btn
submitBtn.onclick = function () {
  generateQuiz(myQuestions, resultsContainer, quizContainer, submitBtn);
};

// set of 4 questions with multiple choice

var myQuestions = [
  {
    question: "What are Curly Braces",
    answers: {
      1: "{ }",
      2: "[ ]",
      3: "| |",
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
      2: "Let me worry about BLANK",
      3: "Blank STARE",
    },
    correctAnswer: "2",
  },

  {
    question: "Finish the statement-It's just...",
    answers: {
      1: "vast nothingness",
      2: "water",
      3: "JavaScript",
    },
    correctAnswer: "3",
  },
];

function showQuestion(questions, quizContainer) {
  //place to store output and results
  var output = [];
  var answers;
  for (var i = 0; i < questions.length; i++) {
    answers = [];
    for (number in questions[i].answers) {
      //radio button
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          number +
          '">' +
          number +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }

  quizContainer.innerHTML = output.join("");
}

//     const correctAnswer = [ "{}", "[]", "<>", "A value that expresses only truth", "A value that expresses only false", "A value that expresses a truth or false value",
//     "Dont you worry about BLANK", "Let me worry about BLANK", "Blank STARE", "vast nothingness", "water", "JavaScript"];

// //1Function for- if question is right display correct if is wrong deduct time and display wrong
// // function end screen function that show final score with initials display
// //function that save high score

// // time interval here
// function startTimer() {
//   var timeLeft = 60;
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerLeft.questions = timeLeft + " Seconds to go";
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timer.questions = timeLeft + " Seconds to go";
//       timeLeft--;
//     } else {
//       timer.textContent = "";
//       clearInterval(timeInterval);
//       displayMessage();
//     }
//   }, 1000);
// }

//   getQuestions();
//   var startTimer = 60;
// }

// //timer function
// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     display.textcontent = seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 100);
// }
// // window.onload = function () {
// //   var threeMinutes = 60 * 3,
// //     display = document.querySelector("#time");
// //   startTimer(threeMinutes, display);
// // };
// //<span id="timer"></span>;

// var minutes = Math.floor;
// //character criteria

// startBtn.addEventListener("click", showQuestion);
// submitBtn.addEventListener("click", showResults);

var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('#question');
var choiceEl = document.querySelector('.answer-options')
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')
/* var shuffledQuestions = randomizeQuestions(); */


var secondsLeft = 75;
var currentScore = 0;
var currentQuestion = 0;
var finalScore;

function startQuiz() {
    console.log('Started');
    document.getElementById('home').style.display="none";
    document.getElementById('game').style.display='block';
    
    startTimer();
    getNewQuestion();
}
startButton.addEventListener('click', startQuiz)


function startTimer() {
    timer.textContent = secondsLeft;
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

var choiceOne = document.querySelector('#answer-1')
var choiceTwo = document.querySelector('#answer-2')
var choiceThree = document.querySelector('#answer-3')
var choiceFour = document.querySelector('#answer-4')
var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('#question');
var choiceEl = document.querySelector('.choice-container')
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')
var shuffledQuestions = randomizeQuestions();


var secondsLeft = 60;
var currentScore = 0;
var currentQuestion = 0;
var finalScore;
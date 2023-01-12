var startButton = document.querySelector('#start');
var timer = document.querySelector('.timerCounter');
var question = document.querySelector('#question');
var answerEl = document.querySelector('.answer-options')
var highScores = document.querySelector('#high-scores');
var finalScoreText = document.querySelector('.finalScore');
var initials = document.querySelector('#initials')
var shuffledQuestions = randomizeQuestions();


/* function randomizeQuestions() {
    let questionsClone = questionsArray;
    for (let i = 0; i < questionsClone; i++) {



        let answersArray = questionsClone[i].answersArray;
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    });



    return questionsClone
    ;
} */


var secondsLeft = 75;
var currentScore = 0;
var currentQuestion = 0;
var finalScore;

var questionsArray = [{

    question: "Which of the following artists would be at a bar, at nine o'clock, on a saturday",
    answersArray: [
        {choice: "Billie Joe Armstrong", correct: false},
        {choice: "Billy Bob Thornton", correct: false},
        {choice: "Billy Joel", correct: true},
        {choice: "Billy Idol", correct: false},
    ] 
},

{
    question: "Which of the following artists was born in the UK",
    answersArray: [
        {choice: "Billie Joe Armstrong", correct: false},
        {choice: "Billy Bob Thornton", correct: false},
        {choice: "Billy Joel", correct: false},
        {choice: "Billy Idol", correct: true},
    ] 
},

{
    question: "Which of the following options is the name of the Michael Jackson song",
    answersArray: [
        {choice: "Billie Jean", correct: true},
        {choice: "Billy Bob Thornton", correct: false},
        {choice: "Billy Joel", correct: false},
        {choice: "Billie Joe Armstrong", correct: false},
    ] 
},

{
    question: "Which of the following options is not a musician, but a movie star",
    answersArray: [
        {choice: "Billie Joe Armstrong", correct: false},
        {choice: "Billy Bob Thornton", correct: true},
        {choice: "Billy Joel", correct: false},
        {choice: "Billy Idol", correct: false},
    ] 
},

{
    question: "Which of the following artists wrote the song, New York State of Mind",
    answersArray: [
        {choice: "Billie Joe Armstrong", correct: false},
        {choice: "Billy Bob Thornton", correct: false},
        {choice: "Billy Joel", correct: true},
        {choice: "Billy Idol", correct: false},
    ] 
},

]

/* {
    question: "",
    
    
    [
        
        
        {choice: "Billie Joe Armstrong", false},
       
       
        {choice: "Billy Bob Thornton", true},
       
        {choice: "Billy Joel", false},
       
        {choice: "Billy Jean", false},
    ] 
},

{
    question: "",
    answersArray: [
        {choice: "Billie Joe Armstrong",  false},
      
        {choice: "Billy Bob Thornton",  false},
        {choice: "Billy Joel", true},
        {choice: "Billy Idol", false},
    ] 
}, */

function startQuiz() {
    console.log('Started');
    document.getElementById('home').style.display="none";
    document.getElementById('game').style.display='block';
    
    startTimer();
    getNewQuestion();
}
startButton.addEventListener('click', startQuiz)


/* function startTimer() {
    timer.textContent = secondsLeft;
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
} */

function startTimer() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft == 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Time Is Up";
            quizHeader.textContent = "You Have Lost";
            losses++;
            clearInterval(timeInterval);
        }
    }, 1000);
}

var answerOne = document.querySelector('#answer-1')
var answerTwo = document.querySelector('#answer-2')
var answerThree = document.querySelector('#answer-3')
var answerFour = document.querySelector('#answer-4')

function getNewQuestion() {
    currentQuestion++;
    if (currentQuestion === shuffledQuestions.length) {
        secondsLeft = 0;
    }
    else {
        question.textContent = shuffledQuestions[currentQuestion].question;
        
        let answers = [answerOne, answerTwo, answerThree, answerFour];
        let i = 0;
        answersArray.forEach(element => {
            element.textContent = shuffledQuestions[currentQuestion].answersArray[i].answers;
            i++
        }, i);
    };
};

choiceEl.addEventListener('click', function(event) {
    let correctAnswer = getCorrectAnswer(currentQuestion);
    
    if (textContent === correctAnswer) {
        currentScore += 25;
    }
    else {
        secondsLeft -= 10;
    }
    
    setTimeout(
        () => {
            getNewQuestion();
        }, 500)
})

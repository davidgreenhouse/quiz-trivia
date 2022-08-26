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


function randomizeQuestions() {
    let questionsClone = questionsArray;
    for (let i = 0; i < questionsClone.length; i++) {

        let answersArray = questionsClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }

    questionsClone = questionsClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });

    return questionsClone;
}
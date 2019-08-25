//-----array of objects-----//
const quizQuestions = [
    {
        question: "In Disney's The Jungle Book who teaches Mowgli about the bare necesseties of life?",
        choices: ["Baloo", "Bamboo", "Teera", "Shere"],
        correctAnswer: "Baloo"
    },

    {
        question: "What does the crocodile swallow in Disney's Peter Pan?",
        choices: ["Tinkerbell", "A clock", "A hook", "A bomb"],
        correctAnswer: "A clock"
    },

    {
        question: "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
        choices: ["Scorpion", "Snake", "Camel", "Wolf"],
        correctAnswer: "Snake"
    },

    {
        question: "In which city is the Disney movie Ratatouille based?",
        choices: ["London", "Barcelona", "Croatia", "Paris"],
        correctAnswer: "Paris"
    },

    {
        question: "In the Disney movie Robin Hood, what type of animal was Robin?",
        choices: ["Rabbit", "Bear", "Fox", "Mouse"],
        correctAnswer: "Fox"
    }
]

//-----array of gifs-----//
const winImages = [
    "./assets/images/yay1.gif",
    "./assets/images/yay2.gif",
    "./assets/images/yay3.gif",
    "./assets/images/yay4.gif",
    "./assets/images/yay5.gif"
];

const lossImages = [
    "./assets/images/boo1.gif",
    "./assets/images/boo2.gif",
    "./assets/images/boo3.gif",
    "./assets/images/boo4.gif",
    "./assets/images/boo5.gif"
];

//-----Initial values-----//
let counter = 30;
let currentQuestion = 0; 
let guessedCorrect = 0; 
let guessedIncorrect = 0; 
let unanswered = 0; 
let timer; 


//-----Functions-----//


//displayed after user chooses a question and informs them if they are correct
function preloadImage(status) {
    
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (status === 'win') {
        $("#game").html(`
            <div class="centered">
            <p class="preload-image"><b>Correct!</b></p>
            <p class="preload-image">The the answer is <b>${correctAnswer}</b></p>
            <img class="winGIF" src="${randomImage(winImages)}" />
            </div>
        `);
    } else {
        $("#game").html(`
            <div class="centered">
            <p class="preload-image"><b>Incorrect!</b></p>
            <p class="preload-image">The correct answer was <b>${correctAnswer}</b></p>
            <img src="${randomImage(lossImages)}" />
            </div>
        `);
    }
}

//determines when the game is over
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion; 
    if (isQuestionOver){
        console.log("Game is over");
        displayResult();
    } else { 
        currentQuestion++;
        loadQuestion();
    }
}

//what happens when 30 seconds are up on a question
function timeUp() {
    clearInterval(timer);
    unanswered++;
    preloadImage('loss');
    setTimeout(nextQuestion, 3 * 1000);
}

//changes the counter variable at 1 sec
function countDown() {
    counter--;
    $("#time").html("Timer: " + counter); 
    if (counter === 0) {
        timeUp();
    }
}

//what happens when a new question is loaded
function loadQuestion() {
    counter = 30; 
    timer = setInterval(countDown, 1000);
    
    //call on current question with answer choices from array
    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;


    $("#time").html("Timer: " + counter);

    //display variables called onto screen in game div
    //same as ("<h4>" + question + "</h4>")
    $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
        <div class="centered" id="question-counter">${loadRemainingQuestion()}</div>
    `);
}         

//displaying answer choices for a specific question
function loadChoices(choices) {
    let result = "";

    for (let i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`; //contains every value of every choice in a p tag
    }

    return result; 
}

//winning-losing responses
$(document).on("click", ".choice", function() { //more functional than $(".choice").on("click", function()
    clearInterval(timer);
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer){
        guessedCorrect++; 
        console.log ("correct");
        preloadImage('win');
        setTimeout(nextQuestion, 3 * 1000);
    } else {
        guessedIncorrect++;
        console.log ("incorrect");
        preloadImage('loss');
        setTimeout(nextQuestion, 3 * 1000);
    }

    //console.log ("test answer", selectedAnswer)
});

//results page with final tallies
function displayResult() {

    const result = `
        <div class="centered">
        <p>You had ${guessedCorrect} question(s) correct</p>
        <p>You had ${guessedIncorrect} question(s) incorrect</p>
        <p>You had ${unanswered} question(s) unanswered</p>
        <button type="button" id="button" class="reset">Reset Game</button>
        </div>
    `;

    $("#game").html(result);
}

//reset values
$(document).on("click", ".reset", function() {
    counter = 30;
    currentQuestion = 0; 
    guessedCorrect = 0; 
    guessedIncorrect = 0; 
    unanswered = 0; 
    timer = null;

    loadQuestion(); 
});

//function for returning random gifs from string
function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}

//tells you what question you are on
function loadRemainingQuestion() {
    const currentPosition = (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Question ${currentPosition} of ${totalQuestion}`;
}

//restarting the game
$(".start").click(function() {
    $(".start").remove();
    $("#time").html(counter);
    loadQuestion();
});
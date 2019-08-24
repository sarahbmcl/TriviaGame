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
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion; //************stuck here*************/ 
    if (isQuestionOver){
        console.log("Game is over");
        displayResult();//************HELP--WONT MOVE ON TO NEW SCREEN *************/ 
    } else { 
        currentQuestion++;
        loadQuestion();
    }
}

function timeUp() {
    clearInterval(timer);
    unanswered++;
    preloadImage("loss");
    setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
    counter--;
    $("#time").html("Timer: " + counter); 
    if (counter === 0) {
        timeUp();
    }
}

//display the question and choices together in the browser
function loadQuestion() {
    counter = 30; 
    timer = setInterval(countDown, 1000);
    
    //call on current question with answer choices from array
    const question = quizQuestions[currentQuestion].question;
    const choices = quizQuestions[currentQuestion].choices;


    $("#time").html("Timer: " + counter);

    //display variables called on to screen in game div
    $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
        ${loadRemainingQuestion()}
    `);
}         //same as ("<h4>" + question + "</h4>")

function loadChoices(choices) {
    let result = "";

    for (let i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`; //contains every value of every choice in a p tag
    }

    return result; 
}

$(document).on("click", ".choice", function() { //more functional than $(".choice").on("click", function()
    clearInterval(timer);
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer){
        guessedCorrect++; 
        console.log ("correct");
        preloadImage("win");
        setTimeout(nextQuestion, 3 * 1000);
    }else{
        guessedIncorrect++;
        console.log ("incorrect");
        preloadImage("loss");
        setTimeout(nextQuestion, 3 * 1000);
    }

    //console.log ("test answer", selectedAnswer)
});

function displayResult() {

    const result = `
        <p>You got ${guessedCorrect} question(s) correct</p>
        <p>You got ${guessedIncorrect} question(s) incorrect</p>
        <p>You had ${unanswered} question(s)</p>
        <button type="button" id="reset">Reset Game</button>
    `;

    $("game").html(result);
}

$(document).on("click", "#reset", function() {
    counter = 30;
    currentQuestion = 0; 
    guessedCorrect = 0; 
    guessedIncorrect = 0; 
    unanswered = 0; 
    timer = null;

    loadQuestion(); 
});


function loadRemainingQuestion() {
    const remainingQuestions = quizQuestions.length - (currentQuestion + 1);
    const totalQuestions = quizQuestions.length;

    return `Remaining Questions: ${remainingQuestions}/${totalQuestions}`;
}

function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}

function preloadImage(status) {//***understanding status */
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (status === "win") {
        $("game").html(`
            <p class="preload-image">Congratulations, you're correct!</p>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
            <img src="${randomImage(winImages)}" />
        `);
    } else {
        $("#game").html(`
            <p class="preload-image">Incorrect!</p>
            <p class="preload-image">The correct answer was <b>${correctAnswer}</b></p>
            <img src="${randomImage(lossImages)}" />
        `);
    }
}

$(".start").click(function() {
    $(".start").remove();
    $("#time").html(counter);
    loadQuestion();
});
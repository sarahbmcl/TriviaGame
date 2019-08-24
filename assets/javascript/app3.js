//array of objects
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

//Initial values
let counter = 30;
let currentQuestion = 0; //pulls question from the array
let score = 0; //correctly guessed
let lost = 0; //incorrectly guessed
let unanswered = 0; 
let timer; //holds id of set interval of clock

function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver){
        console.log("Game is over")
    }else{
    currentQuestion++;
    loadQuestion();
    }
}

function timeUp() {
    clearInterval(timer);
    unanswered++;
    nextQuestion();
}

function countDown() {
    counter--;
    $("#time").html("Timer: " + counter); //**** */
    if (counter === 0) {
        timeUp();
    }
}

//display the question and choices together in the browser
function loadQuestion() {
    counter = 30; //always call function with 30 initial value
    timer = setInterval(countDown, 1000);//*** */
    
    //call on current question with answer choices from array
    const question = quizQuestions [currentQuestion].question;
    const choices = quizQuestions [currentQuestion].choices;


    $("#time").html("Timer: " + counter);

    //display variables called on to screen in game div
    $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `);
}         //same as ("<h4>" + question + "</h4>")

function loadChoices(choices) {
    let result = "";

    //DATA ANSWER****
    for (let i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`; //contains every value of every choice in a p tag
    }

    return result; 
}

//**** more functional than $(".choice").on("click", function()
$(document).on("click", ".choice", function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = quizQuestions [currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer){
        score++; 
        console.log ("correct");
        nextQuestion();
    }else{
        lost++;
        console.log ("incorrect");
        nextQuestion();
    }
    

    console.log ("test answer", selectedAnswer)
});

loadQuestion();
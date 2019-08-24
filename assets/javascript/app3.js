//array of objects
const quizQuestions = [
    {
        question: "In Disney's The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
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
let counter = 30; //seconds to start
let currentQuestion = 0; //pulls question from the array
let score = 0; //correctly guessed
let lost = 0; //incorrectly guessed
let unanswered = 0; //no response
let timer; //holds id of set interval of clock

//display the question and choices together in the browser
function loadQuestion() {

    //call on current question with answer choices from array
    const question = quizQuestions [currentQuestion].question;
    const choices = quizQuestions [currentQuestion].choices;

    //display variables called on to screen in game div
    $("#game").html("<h4>" + question + "</h4>");
}

loadQuestion();
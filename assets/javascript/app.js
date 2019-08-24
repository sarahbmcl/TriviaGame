//----------variables----------//

const questions = [
    "In Disney's The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
    "What does the crocodile swallow in Disney's Peter Pan?",
    "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
    "In which city is the Disney movie Ratatouille based?",
    "In the Disney movie Robin Hood, what type of animal was Robin?",
]

let answers = [
    [["Baloo", 1],["Bamboo", 0],["Teera", 0],["Shere", 0]],
    [["A clock", 1],["A bomb", 0],["A hook", 0],["Tinkerbell", 0]],
    [["A snake", 1],["A camel", 0],["A scorpion", 0],["A wolf", 0]],
    [["Paris", 1],["Rome", 0],["Croatia", 0],["Barcelona", 0]],
    [["A fox", 1],["A bear", 0],["A mouse", 0],["A rabbit", 0]],
]

    let correct: 0
    let incorrect: 0
    let unanswered: 0
    let timeRemaining: " "
    let userAnswer: " "

//----------functions----------//

function mainPage() {

}

function startGame() {

}


//on click start game
    button.onclick = startGame();

//move to question page
    function startGame (){
        function startTimer;
        function nextQuestion;
    }

//ask question 1 of X
//show answer choices
    //on click

        function correct() {
            if (userAnswer === 1);
            alert ("Correct!");
            //show gif
            //say correct
            //show correct answer
            correct++;
            function nextQuestion();
        }

        function incorrect() {
            if (userAnswer === 0);
            alert ("Incorrect!");
            //show gif
            //say incorrect
            //show correct answer
            incorrect++;
            function nextQuestion();
        }

        function noResponse() {
            if (userAnswer === undefined);
            alert ("Out of time!");
            //tell out of time
            //show gif
            //say out of time 
            //show correct
            unanswered++;
            function nextQuestion();
        }

        //loops through questions/answers

        function nextQuestion() {
            //start timer
            for (let i=0; i<questions.length, i++);
            for (let i=0; i<answers.length, i++);
        }

        //when no more questions are left go to 

        function gameStats() {

        }

        //where the startover button is held
        function startOver() {

        }
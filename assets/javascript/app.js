//----------variables----------//

let questions = [
    "In Disney's The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
    "What does the crocodile swallow in Disney's Peter Pan?",
    "During the battle with Aladdin, what type of animal does Jafar transform himself into?",
    "In which city is the Disney movie Ratatouille based?",
    "In the Disney movie Robin Hood, what type of animal was Robin?",
    "In Disney's The Aristocats, what kind of truck does O’Malley spot to give Dutchess and the kittens a ride back to Paris in?",
]

let answers = [
    [["Baloo", 1],["Bamboo", 0],["Teera", 0],["Shere", 0]],
    [["A clock", 1],["A bomb", 0],["A hook", 0],["Tinkerbell", 0]],
    [["A snake", 1],["A camel", 0],["A scorpion", 0],["A wolf", 0]],
    [["Paris", 1],["Rome", 0],["Croatia", 0],["Barcelona", 0]],
    [["A fox", 1],["A bear", 0],["A mouse", 0],["A rabbit", 0]],
    [["Milk truck", 1],["Baby carriage", 0],["Bicycle baskey", 0],["Riverboat", 0]]
]

let game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timeRemaining: "",
    userAnswer: "",
}

//----------functions----------//

function mainPage() {

}

function startGame() {

}

function gameStats() {

}


//on click start game
    button.onclick = function(){myScript};
//move to question page
//begin timer
//ask question 1 of X
//show answer choices
    //on click
        function correct() {
            //show gif
            //say correct
            //show correct answer
            correct++;
            function nextQuestion();
        }

        function incorrect() {
            //show gif
            //say incorrect
            //show correct answer
            incorrect++;
            function nextQuestion();
        }

        function noResponse() {
            //tell out of time
            //show gif
            //say out of time
            //show correct
            unanswered++;
            function nextQuestion();
        }

        function nextQuestion() {

        }

        function startOver() {

        }
//start over
    //restart quiz
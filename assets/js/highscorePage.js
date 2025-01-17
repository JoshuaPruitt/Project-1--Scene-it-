//The script needs to take the right, wrong, and totalQuestions variables and append them to the page
//The page should let the user know how many questions they got right and how many questions they got wrong
//selectionChoice can be used to let the user know what quiz they chose at the index.html.

//the page should also take a users name in so that it can take their score and put it on the highscore page
//right and wrong are how many questions the user got right and or wrong

const startAgain = document.getElementById('back-btn')

var correctTotalJSON = localStorage.getItem("finalScores")
let finalScores = JSON.parse(correctTotalJSON)
console.log(finalScores)
let right = "Great Job!!";
let wrong = "Too bad try again!";

if(finalScores.correct>finalScores.incorrect){
    let element = document.getElementById('message');
    element.textContent = right;
    element.classList.add('text-success');
}
else{
    let element = document.getElementById('message');
    element.textContent = wrong;
    element.classList.add('text-danger');
}
let score = finalScores.correct * 250;
let scoreElement = document.getElementById('score')
scoreElement.textContent = score

    
//total questions is right and wrong added together. 
let totalQuestions = 5;
//selection choice is the quiz that was selected. (if someone selected the 'games' quiz this variable will say 'games')
let selectionChoice;

//init runs on startup. It grabs the variables from storage and 
function init(){
    //grab storage and set it
    let finalScores = JSON.parse(localStorage.getItem('finalScores'))
    //set scores to equal the requested information
    right = finalScores.correct
    wrong = finalScores.incorrect 
    //add scores to get a total score
    totalQuestions = right + wrong
    //get the selection choice
    selectionChoice = finalScores.testNo


    //returns those variables and rewrites them to have the newly grabbed information
    return
};

//function redirects the page
const redirectPage = function(url){
    location.assign(url)
};

//takes user back the the starting page
startAgain.addEventListener('click', function(event){
    let userConfirmed = confirm("Are you sure you want to go back to the start?");

    if (userConfirmed){
        redirectPage('./index.html')
    }
});



//this runs the init function at startup. S
init()

// you can look at the console to see the variables in action
console.log('Correct: ' + right)
console.log('Incorrect: ' + wrong)
console.log('Total Questions: ' + totalQuestions)

console.log(selectionChoice + ' was selected')
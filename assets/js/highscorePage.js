let right = 0;
let wrong = 0;
//total questions is right and wrong added together. 
let totalQuestions = 0;
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

//this runs the init function at startup. S
init()

var correctTotal = .7 * totalQuestions
if (right >= correctTotal) 
// you can look at the console to see the variables in action
console.log('Correct: ' + right)
console.log('Incorrect: ' + wrong)
console.log('Total Questions: ' + totalQuestions)

console.log(selectionChoice + ' was selected')
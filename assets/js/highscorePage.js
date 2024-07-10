let right = 0;
let wrong = 0;
let totalQuestions = 0;
let selectionChoice;

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
<<<<<<< Updated upstream

=======
    
    var correctTotal = .7 * totalQuestions
    if (right >= correctTotal)

    //returns those variables and rewrites them to have the newly grabbed information
>>>>>>> Stashed changes
    return
};

init()
console.log('Correct: ' + right)
console.log('Incorrect: ' + wrong)
console.log('Total Questions: ' + totalQuestions)

console.log(selectionChoice + ' was selected')
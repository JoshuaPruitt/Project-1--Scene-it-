//The script needs to take the right, wrong, and totalQuestions variables and append them to the page
//The page should let the user know how many questions they got right and how many questions they got wrong
//selectionChoice can be used to let the user know what quiz they chose at the index.html.

//the page should also take a users name in so that it can take their score and put it on the highscore page

//right and wrong are how many questions the user got right and or wrong
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

// you can look at the console to see the variables in action
console.log('Correct: ' + right)
console.log('Incorrect: ' + wrong)
console.log('Total Questions: ' + totalQuestions)

console.log(selectionChoice + ' was selected')
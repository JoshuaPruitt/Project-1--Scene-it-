// code must interface with buttons. 
// JavaScript will read from storage and append items to page. 
// First itll show a video. Once the video is finished a player can press the start button. The video will disapear, a timer will start, and questions will append to the page.
// if the timer finishes before the questions have been answered then a fail will display onto the screen. Then it will go to the next question

//bug within code. Currently the default questions are overwriting the new ones This can be solved by linking the display code to the start button instead of displaying after submit.

//Contained within header
    //scoreCorrect and scoreWrong will change the number in both to update the score
const scoreCorrrect = document.getElementById('scoreCorrect');
const scoreWrong = document.getElementById('scoreWrong')
const timeLeft = document.querySelector('timeLeft');
const backButton = document.querySelector('backButton');

//Contained within main section
const videoBox = document.getElementById('videoBox');
const video = document.getElementById('video')
    //defaultVideo will likely be removed later
const defaultVideo = document.getElementById('defaultVideo')
const startButton = document.querySelector('start');
const contidionText = document.getElementById('conditionalText')

//Contained within footer
const submitId = document.getElementById('submit');

//Selections for questions
const selectionLabel = document.getElementById('selectionTitle')
const selection1Label = document.getElementById('selection1');
const selection2Label = document.getElementById('selection2');
const selection3Label = document.getElementById('selection3');
const selection4Label = document.getElementById('selection4');

//Selection value
let selection = document.getElementsByName('question');

//q keeps track of which question we are on. right and wrong keeps check of the score
var q = 0;
var right = 0;
var wrong = 0;

//correct and inncorect message 
let correctText = 'You got a question right! Good Job!!';
let inncorrectText = 'Im sorry, you got this question wrong';

//Test category
let testObj = {
    //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
    Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/7AvXEmQU69Q?si=MnfVvYsgfmm98UFA&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 

    ],
    //this stores all the questions for a category
    questions: [
        //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
        {questiontext: 'This is question 1', questionAnswer: 0, q1: 'Hai!', q2: "hellooo!", q3: 'greetings', q4: 'yipppee'},
        {questiontext: 'This is question 2', questionAnswer: 1, q1: 'a', q2: "b", q3: 'c', q4: 'd'}, 
        {questiontext: 'This is question 3', questionAnswer: 2, q1: 'b', q2: "c", q3: 'd', q4: 'a'}, 
        {questiontext: 'This is question 4', questionAnswer: 3, q1: 'c!', q2: "d", q3: 'a', q4: 'b'},
        {questiontext: 'This is question 5', questionAnswer: 0, q1: 'd!', q2: "a", q3: 'b', q4: 'c'},
    ]  
};


function displayInformation(){
    //display the Score
    scoreCorrrect.innerHTML = right;
    scoreWrong.innerHTML = wrong;

    //display questions
    selectionLabel.innerHTML = testObj.questions[q].questiontext;
    selection1Label.innerHTML = testObj.questions[q].q1;
    selection2Label.innerHTML = testObj.questions[q].q2;
    selection3Label.innerHTML = testObj.questions[q].q3;
    selection4Label.innerHTML = testObj.questions[q].q4;
    //remove video and add new one. If statement is for if there is a default video on the screen and we want to replace that. (will likely be removed as there will be no default video later)
    //add new video and append it
    video.innerHTML = testObj.Video[q];
    console.log('replaced video')
  
    // add 1 to q to go to next question
    q++
    //return q ro save the increment by 1
    return q
}

//calculate if a question is right or wrong
function calculateWrongRight (){
    let message;

    //checks to see if any of the values are checked
    for (let x=0; x < selection.length; x++){
        //.checked will check if a selection box has been checked
        if(selection[x].checked){
            
            //as long as there are questions then continue.
            if (q < testObj.questions.length){
                //checks if the question answer and the selection equal the same value. If so then display correct
                if (testObj.questions[q].questionAnswer == selection[x].value){
                    //add one to right
                    right++
                    message = correctText
                    winFailDisplay(message)
                } else {
                    wrong++
                    message = inncorrectText
                    winFailDisplay(message)
                }
            //if theres no more questions then end game
            } else {
                endGame()
            }
        }
    }
    return
};

function winFailDisplay(message){
    video.style.visibility = 'hidden'
    contidionText.innerHTML = message;
    
    if(message == correctText){
        videoBox.style.backgroundColor = "#6BED8D";
    } else {
        videoBox.style.backgroundColor = "#E29696";
    }

    let conditonTimer = setTimeout(function(){
        contidionText.innerHTML = "";
        video.style.visibility = 'visible'
        clearInterval(conditonTimer)
    }, 1000 * 3)
}

//when there are no more questions then end the game. Write new data to storage. 
function endGame(){
    console.log("no more questions!")
};

submitId.addEventListener('click', function(event) {
    event.preventDefault();

    //calculate if the question is right or wrong
    calculateWrongRight()

    //set the inner html to have nothing in it
    selectionLabel.innerHTML = '';
    selection1Label.innerHTML = '';
    selection2Label.innerHTML = '';
    selection3Label.innerHTML = '';
    selection4Label.innerHTML = '';
    scoreCorrrect.innerHTML = '';
    scoreWrong.innerHTML = '';

    //display the new questions and score
    displayInformation()


});


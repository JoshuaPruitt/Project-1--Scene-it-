// code must interface with buttons. 
// JavaScript will read from storage and append items to page. 
// First itll show a video. Once the video is finished a player can press the start button. The video will disapear, a timer will start, and questions will append to the page.
// if the timer finishes before the questions have been answered then a fail will display onto the screen. Then it will go to the next question

//Local storage connections still must be made

//Contained within header
    //scoreCorrect and scoreWrong will change the number in both to update the score
const scoreCorrrect = document.getElementById('scoreCorrect');
const scoreWrong = document.getElementById('scoreWrong')
const timeLeft = document.querySelector('timeLeft');
const backButton = document.getElementById('backButton');

//Contained within main section
const videoBox = document.getElementById('videoBox');
const video = document.getElementById('video')
    //defaultVideo will likely be removed later
const defaultVideo = document.getElementById('defaultVideo')
const startButton = document.getElementById('startId');
const contidionText = document.getElementById('conditionalText')

//Contained within footer
const questions = document.getElementById('questions')
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
var selectionNo;

//correct and inncorect message 
let correctText = 'You got a question right! Good Job!!';
let inncorrectText = 'Im sorry, you got this question wrong';

//Test category


let Movies = {
    //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
    Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/2GCzyZexnNE?si=7MQora333xfr2lv7" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' ,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/sU4T_9pxpbk?si=NEvprkObDUYo8r4F" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' ,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/cVsyJvxX48A?si=6joeYDJIADs-sun0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' ,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/v_DQtUK-FXg?si=LgCnNkYN9tQftBKY" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' ,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/nwPMKcYEkmw?si=poi1KH42uBVh9PQH" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'


    
    ],
    //this stores all the questions for a category
    questions: [
        //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
        {questiontext: 'What color are the Dogs eyes?', questionAnswer: 1, q1: 'Brown', q2: "Blue", q3: 'Green', q4: 'Black'},
        {questiontext: 'WHat did the guy want to borrow?', questionAnswer: 3, q1: 'Pencil', q2: "Tennis Racket", q3: 'Pen', q4: '$20'}, 
        {questiontext: 'What color sweater was Mr Ribbon wearing?', questionAnswer: 3, q1: 'Brown', q2: "Red", q3: 'Blue', q4: 'Yellow'}, 
        {questiontext: 'What is the Quantitatives name?>', questionAnswer: 2, q1: 'Yang', q2: "Jiang", q3: 'Bob', q4: 'Shawn'},
        {questiontext: 'What color Rope does Russell Have on his backpack?', questionAnswer: 4, q1: 'Black', q2: "Brown", q3: 'Green', q4: 'Orange'},
        
    ]  
};



function displayInformation(){
    //set the questions and submit button to visible and set the start button to invisible
    questions.style.visibility = 'visible'
    submitId.style.visibility = 'visible'
    startButton.style.visibility = 'hidden'

    //make scores blank before adding information
    scoreCorrrect.innerHTML = '';
    scoreWrong.innerHTML = '';

    //display the Score
    scoreCorrrect.innerHTML = right;
    scoreWrong.innerHTML = wrong;

    //display questions
    selectionLabel.innerHTML = mainObj.questions[q].questiontext;
    selection1Label.innerHTML = mainObj.questions[q].q1;
    selection2Label.innerHTML = mainObj.questions[q].q2;
    selection3Label.innerHTML = mainObj.questions[q].q3;
    selection4Label.innerHTML = mainObj.questions[q].q4;
    //remove video and add new one. If statement is for if there is a default video on the screen and we want to replace that. (will likely be removed as there will be no default video later)
    //add new video and append it
    video.innerHTML = mainObj.Video[q];
    console.log('replaced video')
};

//calculate if a question is right or wrong
function calculateWrongRight (){
    let message;

    //checks to see if any of the values are checked
    for (let x=0; x < selection.length; x++){
        //.checked will check if a selection box has been checked
        if(selection[x].checked){
            
            console.log('Question Answer: '+ mainObj.questions[q].questionAnswer)
            console.log('Selection Value: '+ selection[x].value)

            //checks if the question answer and the selection equal the same value. If so then display correct
            if (mainObj.questions[q].questionAnswer == selection[x].value){
                //add one to right
                right++
                message = correctText
                winFailDisplay(message)
            } else {
                wrong++
                message = inncorrectText
                winFailDisplay(message)
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
        //if theres no more questions then end game
        if (q >= mainObj.questions.length){
            endGame()
        }

        contidionText.innerHTML = "";
        //set the video back to visible and set the background color back to normal
        video.style.visibility = 'visible'
        videoBox.style.backgroundColor = '#95C1ED'
        clearInterval(conditonTimer)

        startButton.style.visibility = 'visible'
    }, 1000 * 3)
};

//when there are no more questions then end the game. Write new data to storage. 
function endGame(){
    //store data to be pulled on next page
    let scoreData = {correct:right, incorrect:wrong, testNo:selectionChoice}
    localStorage.setItem('finalScores', JSON.stringify(scoreData));
    //redirect page
    redirectPage('highscorePage.html')
};

//initialize the page on startup. 
function init(){
    //on startup hide the questions
    questions.style.visibility = 'hidden'
    submitId.style.visibility = 'hidden'

    //if the page has just started then set the starting information. Take information from starting page and change object to = that starting information
    if(JSON.parse(localStorage.getItem('selectionInfo')) !== null){

        let unseperatedObj = JSON.parse(localStorage.getItem('selectionInfo'))
        selectionChoice = unseperatedObj
    }
    return
};

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

//the back button takes you back to the first page
backButton.addEventListener('click', function(event){
    redirectPage('./index.html')
});

startButton.addEventListener('click', function(event){
    event.preventDefault()

    video.style.visibility = 'hidden'

    displayInformation()
});

submitId.addEventListener('click', function(event) {
    event.preventDefault();
    //set the submit button to hidden so that it cannot be pressed mutiple times
    init()

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

    //Re-display the Score
    scoreCorrrect.innerHTML = right;
    scoreWrong.innerHTML = wrong;
    
    // add 1 to q to go to next question
    q++
});

//run on startup
init()


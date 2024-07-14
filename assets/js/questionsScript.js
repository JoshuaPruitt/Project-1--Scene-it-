// code must interface with buttons. 
// JavaScript will read from storage and append items to page. 
// First itll show a video. Once the video is finished a player can press the start button. The video will disapear, a timer will start, and questions will append to the page.
// if the timer finishes before the questions have been answered then a fail will display onto the screen. Then it will go to the next question

// The timer is a shoddy fix. Currently if the user is still selecting the correct answer then when the timer finishes it will read as a correct instead of an automatic fail. This can be solved by rewritting the order of operations.

//Contained within header
    //scoreCorrect and scoreWrong will change the number in both to update the score
const scoreCorrrect = document.getElementById('scoreCorrect');
const scoreWrong = document.getElementById('scoreWrong')
const timeLeft = document.getElementById('timeText');
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
let firstTime = true;

//this is the time for each question. 30 is thirty seconds.
let qTime = 30

//correct and inncorect message 
let correctText = 'You got a question right! Good Job!!';
let inncorrectText = 'Im sorry, you got this question wrong';

//manges whether a question has been completed or not
let questionComplete = false

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

//Test category
let mainObj = {
    //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
    Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/7AvXEmQU69Q?si=MnfVvYsgfmm98UFA&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', 
    
    ],
    //this stores all the questions for a category
    questions: [
        //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
        {questiontext: 'This is question 1', questionAnswer: 1, q1: 'Hai!', q2: "hellooo!", q3: 'greetings', q4: 'yipppee'},
        {questiontext: 'This is question 2', questionAnswer: 2, q1: 'a', q2: "b", q3: 'c', q4: 'd'}, 
        {questiontext: 'This is question 3', questionAnswer: 3, q1: 'b', q2: "c", q3: 'd', q4: 'a'}, 
        {questiontext: 'This is question 4', questionAnswer: 4, q1: 'c!', q2: "d", q3: 'a', q4: 'b'},
        {questiontext: 'This is question 5', questionAnswer: 1, q1: 'd!', q2: "a", q3: 'b', q4: 'c'},
    ]  
};

//displays all of the questions and buttons for the page
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
    
};

function displayVideo(){
    //replace default video with new information. Also replace later videos and images
    video.innerHTML = mainObj.Video[q]
    console.log('replaced video. Last video was replaced with video ' + q)
}

//calculate if a question is right or wrong
function calculateWrongRight (){

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
                winFailDisplay(correctText)
            } else {
                wrong++
                winFailDisplay(inncorrectText)
            }
        }
    }
    return
};

//displays a win or fail message depending on the answer
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
        
        //set new video/img
        displayVideo()

        video.style.visibility = 'visible'
        videoBox.style.backgroundColor = '#413d7b'
        clearTimeout(conditonTimer)

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
    if (q==0){
        if(JSON.parse(localStorage.getItem('selectionInfo')) !== null){

            //grab the selection info (selec)
            let unseperatedObj = JSON.parse(localStorage.getItem('selectionInfo'))
            let selectedQuiz = JSON.parse(localStorage.getItem('selectedQuiz'))
            selectionChoice = unseperatedObj
            mainObj = selectedQuiz

            console.log('Main object has been replaced.')
        }
        //display video on startup
        displayVideo()
    }
    console.log('We are on question '+q)
};

//controls the timer for each question
function gameTimer(){
    const windowTimer = () => {
        timeLeft.innerHTML = qTime
        qTime--
        
        // this checks to see whether the question has been completed or not. If the question has been completed then reset the timer and clear it so that it is ready for the next question
        if (questionComplete){
            //clear the interval, set the timer back to 30 secconds and append the reset time to the page
            clearInterval(timeee)
            qTime = 30
            timeLeft.innerHTML = qTime
            questionComplete = false
        }

        if (qTime == 0){
            //so that it still displays the current time
            timeLeft.innerHTML = qTime
            //once the time has gotten down to zero then clear the timer, give a fail message, and set the time back to 30
            clearInterval(timeee)
            qTime = 30

            //call submit func to 
            submitFunc()
        }
    }
    let timeee = setInterval(windowTimer, 1000)
    return 
};

//runs when the submit button is pressed. Sets the question complete to true so that the timer may be ended. Run init so that the questions and submit button are hidden. Calculates wether the question was wrong or right. 
//sets the previously added information back to blank. Displays the score. Adds 1 to the question counter to let the code know we are on the next question. Then displays the new video or image
function submitFunc(event) {
    //clear the time and set it back to 30 secconds
    questionComplete = true;

    //set the submit button to hidden so that it cannot be pressed mutiple times
    init()

    //set video to have nothing in it
    video.innerHTML = "";

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

    return q
};

//the back button takes you back to the first page
backButton.addEventListener('click', function(event){    
    let userConfirmed = confirm("Are you sure you want to start over?");

    if (userConfirmed){
        redirectPage('./index.html')
    }
});

//listens if the start button has been clicked. If it has then start the timer, set the video to hidden, and display the questions.
startButton.addEventListener('click', function(event){
    event.preventDefault()

    //start the game timer
    gameTimer()

    video.style.visibility = 'hidden'

    displayInformation()
});

//runs the submit function whenever the submit button is clicked
submitId.addEventListener('click', submitFunc)
    
//run on startup
init()


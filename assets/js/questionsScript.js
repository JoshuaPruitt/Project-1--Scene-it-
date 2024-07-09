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

let games = {
    //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
    Image: [ img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*JDStDB63qk3XeWfOsGRp_w.png', 
        //Q1 image
        img src='https://i.pinimg.com/564x/88/78/47/887847f9b36cf9851f6a5b3c9652d7ab.jpg',
        //Q2 image
        img src='https://media.wired.com/photos/62e0301fb014c7f5985e3405/master/w_1920,c_limit/Minecraft-NFTs-Games.jpg',
        //Q3 image
        img src='https://m.media-amazon.com/images/I/71fig4TaulL._AC_UF1000,1000_QL80_.jpg',
        //Q4 image
        img src='https://www.militarytimes.com/resizer/qk5iK6khgLj4qgjP_BHe8nDuQrk=/1024x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/2STHBP6WA5B27BSV73CPLMHFCY.png',
        //Q5 image
    
],
    //this stores all the questions for a category
    questions: [
        //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
        {What is his name: 'This is question 1', questionAnswer: 1, q1: 'Crash Bandicoot', q2: "Sonic The Hedgehog", q3: 'The Master Chief', q4: 'The Rat'},
        {what is the name of this map: 'This is question 2', questionAnswer: 2, q1: 'The Silent Cartographer', q2: "Rainbow Road", q3: 'Unicorn Alley', q4: 'Insomnia Lane'}, 
        {What video game is this from: 'This is question 3', questionAnswer: 3, q1: 'Super Mario', q2: "Minecraft", q3: 'Halo', q4: 'Chivalry 2'}, 
        {What video game is this from: 'This is question 4', questionAnswer: 4, q1: 'Mad Pain', q2: 'Twisted Metal', q3: "GTA: Vice City", q4: 'GTA 5'},
        {What is his name: 'This is question 5', questionAnswer: 1, q1: 'Sam', q2: 'Master Chief', q3: 'Captain Price', q4: "Ghost"},
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


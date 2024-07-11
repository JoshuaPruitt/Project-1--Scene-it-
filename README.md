# Project 01 (Scene It Game)

## Introduction
Welcome to our PROJECT-1--SCENE-IT- This site was made to complete the 1st group project for the coding bootcamp. It is a scene it game website, users choose between 4 categories, to answer 5 questions, to see what their high score is at the end of the round.

## Installation
No installation required! To view the page in action simply click on this link <a href="file:///C:/Users/User/OneDrive/Documents/GitHub/Project-1--Scene-it-/index.html">Scene it Game!</a>. That will take you to the deployed site. 

## Usage
To use this site simply open the page. This opens the starting page which contains input boxes for Music, Movies, Sports, and Games. Once the user chooses a category and clicks the 'start' button, they are taken to the 1st question of the category. Then the User clicks on the video(or views the image.) Once the user views video or image, then they click on the start button. Then the user is required to choose the correct input asking a question related to its video, or image, within a time limit of 30 seconds. This process is repeated for 4 more rounds of questions. The users score will display the number of correct, and wrong answers from previous questions. Once all 5 questions are answered, then the round has ended, and the user is directed to the high score page. At the top of the page, the text indicates if the users final score is adequate or not, below this text, other users high scores are displayed from the category. Then, the user clicks 'Start Again' for a new round, or exits out of the page, and the game is over. Each answer is stored in local Storage and grabbed upon page startup.

## Code Snippit
This is a piece of code from the questionsScript.js script. 'q' keeps track of which question we are on. 'right' and 'wrong' keeps check of the score. No selection is required, and firstTime ensures the answer is submited when clicked. qTime is the time aloted for each question. correctText displays correct, incorrectText dispalys wrong. questionComplete is to ensure the question is completed.

var q = 0;
var right = 0;
var wrong = 0;
var selectionNo;
let firstTime = true;

let qTime = 30
 
let correctText = 'You got a question right! Good Job!!';
let inncorrectText = 'Im sorry, you got this question wrong';

let questionComplete = false

## Credits

- Joshua Pruitt

- Jacob MenLove

- Michael Isom

- Parker Speares(Me)

## Contact US

<a href="https://www.linkedin.com/in/joshua-pruitt-1a494a311/">My LinkedIn</a>
       
<a href="https://github.com/JoshuaPruitt">My GitHub</a>

<a href="https://github.com/jacobmenlove">My GitHub</a>
       
<a href="https://github.com/Michael-Isom">My GitHub</a>

<a href="https://www.linkedin.com/in/parker-speares-a24140206/">My LinkedIn</a>

<a href="https://github.com/parkerspeares">My GitHub</a>


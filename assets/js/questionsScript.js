// code must interface with buttons. 
// JavaScript will read from storage and append items to page. 
// First itll show a video. Once the video is finished a player can press the start button. The video will disapear, a timer will start, and questions will append to the page.
// if the timer finishes before the questions have been answered then a fail will display onto the screen. Then it will go to the next question

//Contained within header
const score = document.getElementsByClassName('score');
const timeLeft = document.getElementsByClassName('timeLeft');
const backButton = document.getElementsByClassName('backButton');

//Contained within main section
const videoBox = document.getElementsByClassName('video');
const startButton = document.getElementsByClassName('start');

//Contained within footer


let textObj = [{}];

//data read and write to storage


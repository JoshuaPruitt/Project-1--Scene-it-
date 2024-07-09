//grabs the start button and the selector 
const startButton = document.getElementById('startButton')
const selection = document.getElementsByName('category')

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

let quizzes = [
    {
        //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
        Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/7AvXEmQU69Q?si=MnfVvYsgfmm98UFA&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" </iframe>', 
            
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
    },

    {
        //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
        Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/7AvXEmQU69Q?si=MnfVvYsgfmm98UFA&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',  
    
        ],
        //this stores all the questions for a category
        questions: [
            //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
            {questiontext: 'This is question 1 of the seccond quiz!', questionAnswer: 1, q1: 'WOah', q2: "WE WE", q3: 'this works as intended', q4: 'yipppee'},
            {questiontext: 'This is question 2', questionAnswer: 2, q1: 'a', q2: "b", q3: 'c', q4: 'd'}, 
            {questiontext: 'This is question 3', questionAnswer: 3, q1: 'b', q2: "c", q3: 'd', q4: 'a'}, 
            {questiontext: 'This is question 4', questionAnswer: 4, q1: 'c!', q2: "d", q3: 'a', q4: 'b'},
            {questiontext: 'This is question 5', questionAnswer: 1, q1: 'd!', q2: "a", q3: 'b', q4: 'c'},
        ]
    },

    {
        //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
        Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/7AvXEmQU69Q?si=MnfVvYsgfmm98UFA&amp;controls=0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',  
    
        ],
        //this stores all the questions for a category
        questions: [
            //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
            {questiontext: 'This is question 1 of the third quiz!', questionAnswer: 1, q1: 'WOah', q2: "WE WE", q3: 'this works as intended', q4: 'yipppee'},
            {questiontext: 'This is question 2', questionAnswer: 2, q1: 'a', q2: "b", q3: 'c', q4: 'd'}, 
            {questiontext: 'This is question 3', questionAnswer: 3, q1: 'b', q2: "c", q3: 'd', q4: 'a'}, 
            {questiontext: 'This is question 4', questionAnswer: 4, q1: 'c!', q2: "d", q3: 'a', q4: 'b'},
            {questiontext: 'This is question 5', questionAnswer: 1, q1: 'd!', q2: "a", q3: 'b', q4: 'c'},
        ]
    },
];

startButton.addEventListener('click', function(event){
    check()
    redirectPage('./questionsPage.html')
});

function check(){

    //check all items to see if they are checked or not
    for(let x=0; x < selection.length; x++){
        if(selection[x].checked){
            console.log(selection[x].value + ' was selected')

            let selectionChoice = selection[x].value
            let selectedQuiz = quizzes[x]

            localStorage.setItem('selectionInfo', JSON.stringify(selectionChoice))
            localStorage.setItem('selectedQuiz', JSON.stringify(selectedQuiz))
        }
    }
};


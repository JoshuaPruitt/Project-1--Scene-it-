//grabs the start button and the selector 
const startButton = document.getElementById('startButton')
const selection = document.getElementsByName('category')

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

let Obj = {
    //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
    Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/Ifh-ZndgQyQ?si=Wib6tGs26YT20Gtt" title="YouTube video player" frameborder="0" </iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/vF4iWIE77Ts?si=77mkTwsK7mYHpEiN" title="YouTube video player" frameborder="0" </iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/K-earI3cj5k?si=oqbnE64-VesflShd" title="YouTube video player" frameborder="0" </iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/r1zxtCGDZhs?si=dd88bdZ5MrofzwJA" title="YouTube video player" frameborder="0" </iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-ONdssiN6qE?si=g35kA9N1pF9y0ZEg" title="YouTube video player" frameborder="0"</iframe>',
    ],
    //this stores all the questions for a category
    questions: [
        //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
        {questiontext: 'What Colors Were Jordans Shoes?', questionAnswer: 1, q1: 'White', q2: "Red", q3: 'Black', q4: 'Grey'},
        {questiontext: 'What Color Shirt Was The Referee Wearing?', questionAnswer: 2, q1: 'Blue', q2: "Red", q3: 'Yellow', q4: 'Black'}, 
        {questiontext: 'What Number Was The Goalie Wearing?', questionAnswer: 3, q1: '28', q2: "97", q3: '29', q4: '9'}, 
        {questiontext: 'What Was The Score of The Game?', questionAnswer: 4, q1: '0-2', q2: "0-0", q3: '1-1', q4: '1-0'},
        {questiontext: 'What Area of The Goal Did The Ball Score On?', questionAnswer: 1, q1: 'Top Left', q2: "Bottom Right", q3: 'Bottom left', q4: 'Top Right'},
    ]  
};

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

            localStorage.setItem('selectionInfo', JSON.stringify(selectionChoice))
        }
    }
};


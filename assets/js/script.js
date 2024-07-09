//grabs the start button and the selector 
const startButton = document.getElementById('startButton')
const selection = document.getElementsByName('category')

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

let quizzes = [
    {   
        //This is the music quiz
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
        //This is the movies quiz. Made by Michael 
        //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
        Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/2GCzyZexnNE?si=7MQora333xfr2lv7" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>' ,
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/sU4T_9pxpbk?si=NEvprkObDUYo8r4F" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>' ,
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/cVsyJvxX48A?si=6joeYDJIADs-sun0" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>' ,
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/v_DQtUK-FXg?si=LgCnNkYN9tQftBKY" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>' ,
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/nwPMKcYEkmw?si=poi1KH42uBVh9PQH" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>'
        ],
        //this stores all the questions for a category
        questions: [
            //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
            {questiontext: 'What color are the Dogs eyes?', questionAnswer: 1, q1: 'Brown', q2: "Blue", q3: 'Green', q4: 'Black'},
            {questiontext: 'WHat did the guy want to borrow?', questionAnswer: 3, q1: 'Pencil', q2: "Tennis Racket", q3: 'Pen', q4: '$20'}, 
            {questiontext: 'What color sweater was Mr Ribbon wearing?', questionAnswer: 3, q1: 'Brown', q2: "Red", q3: 'Blue', q4: 'Yellow'}, 
            {questiontext: 'What is the Quantitatives name?', questionAnswer: 2, q1: 'Yang', q2: "Jiang", q3: 'Bob', q4: 'Shawn'},
            {questiontext: 'What color Rope does Russell Have on his backpack?', questionAnswer: 4, q1: 'Black', q2: "Brown", q3: 'Green', q4: 'Orange'},
        ]
    },

    {
        //This is the sports quiz. Made by Jacob Menlove
        //add your video tags here when you create your seperate category. The code switches out the video for the video that q represents. If q = 0 then q will pull up the first video, so on and so forth.
        Video: ['<iframe width="560" height="315" src="https://www.youtube.com/embed/Ifh-ZndgQyQ?si=Wib6tGs26YT20Gtt" title="YouTube video player" frameborder="0" </iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/vF4iWIE77Ts?si=77mkTwsK7mYHpEiN" title="YouTube video player" frameborder="0" </iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/K-earI3cj5k?si=oqbnE64-VesflShd" title="YouTube video player" frameborder="0" </iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/r1zxtCGDZhs?si=dd88bdZ5MrofzwJA" title="YouTube video player" frameborder="0" </iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/-ONdssiN6qE?si=g35kA9N1pF9y0ZEg" title="YouTube video player" frameborder="0"</iframe>',  
    
        ],
        //this stores all the questions for a category
        questions: [
            {questiontext: 'What Colors Were Jordans Shoes?', questionAnswer: 1, q1: 'White', q2: "Red", q3: 'Black', q4: 'Grey'},
            {questiontext: 'What Color Shirt Was The Referee Wearing?', questionAnswer: 2, q1: 'Blue', q2: "Red", q3: 'Yellow', q4: 'Black'}, 
            {questiontext: 'What Number Was The Goalie Wearing?', questionAnswer: 3, q1: '28', q2: "97", q3: '29', q4: '9'}, 
            {questiontext: 'What Was The Score of The Game?', questionAnswer: 4, q1: '0-2', q2: "0-0", q3: '1-1', q4: '1-0'},
            {questiontext: 'What Area of The Goal Did The Ball Score On?', questionAnswer: 1, q1: 'Top Left', q2: "Bottom Right", q3: 'Bottom left', q4: 'Top Right'},
        ]
    },

    {
        //This is the games quiz. Made by Parker Speares
        Video: [ "<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*JDStDB63qk3XeWfOsGRp_w.png'></img>", 
            //Q1 image
            "<img src='https://i.pinimg.com/564x/88/78/47/887847f9b36cf9851f6a5b3c9652d7ab.jpg'></img>",
            //Q2 image
            "<img src='https://media.wired.com/photos/62e0301fb014c7f5985e3405/master/w_1920,c_limit/Minecraft-NFTs-Games.jpg' width=620 height=413></img>",
            //Q3 image
            "<img src='https://m.media-amazon.com/images/I/71fig4TaulL._AC_UF1000,1000_QL80_.jpg' width=620 height=410></img>",
            //Q4 image
            "<img src='https://www.militarytimes.com/resizer/qk5iK6khgLj4qgjP_BHe8nDuQrk=/1024x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/2STHBP6WA5B27BSV73CPLMHFCY.png' width=620 height=410></img>",
            //Q5 image
        
        ],
        //this stores all the questions for a category
        questions: [
            //question text stores the question label. Question answer shows the correct answer. q1-q4 are the selection labels
            {questiontext: 'What is the name of the video game character last shown?', questionAnswer: 2, q1: 'Crash Bandicoot', q2: "Sonic The Hedgehog", q3: 'The Master Chief', q4: 'The Rat'},
            {questiontext: 'What is the name of the map shown?', questionAnswer: 2, q1: 'The Silent Cartographer', q2: "Rainbow Road", q3: 'Unicorn Alley', q4: 'Insomnia Lane'}, 
            {questiontext: 'From what video game does the last screenshot come from?', questionAnswer: 2, q1: 'Super Mario', q2: "Minecraft", q3: 'Halo', q4: 'Chivalry 2'}, 
            {questiontext: 'From what video game does the last screenshot come from?', questionAnswer: 3, q1: 'Mad Pain', q2: 'Twisted Metal', q3: "GTA: Vice City", q4: 'GTA 5'},
            {questiontext: 'What is that characters name?', questionAnswer: 4, q1: 'Sam', q2: 'Master Chief', q3: 'Captain Price', q4: "Ghost"},
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


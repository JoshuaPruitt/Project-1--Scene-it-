//grabs the start button and the selector 
const startButton = document.getElementById('startButton')
const selection = document.getElementsByName('category')

//redirects the page
const redirectPage = function(url){
    location.assign(url)
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


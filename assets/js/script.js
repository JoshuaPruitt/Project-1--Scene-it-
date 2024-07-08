//grabs the start button
const startButton = document.getElementById('startButton')

//redirects the page
const redirectPage = function(url){
    location.assign(url)
};

startButton.addEventListener('click', function(event){
    redirectPage('./questionsPage.html')
});
# challenge-04 (Blog Website)

## Introduction
Welcome to my PROJECT-1--SCENE-IT- This site was made to complete the 1st group project for the coding bootcamp. It is a scene it game website, users choose between 4 categories, to answer 5 questions, to see what their high score is at the end of the round.

## Installation
No installation required! To view the page in action simply click on this link <a href="file:///C:/Users/User/OneDrive/Documents/GitHub/Project-1--Scene-it-/index.html">Scene it Game!</a>. That will take you to the deployed site. 

## Usage
To use this site simply open the page. This opens the starting page which contains input boxes for username, title, and content. Once the user fills all the boxes and hits the submit button it will redirect the user to the blog site. This contains all of the posts submitted from the main screen. Each post contains a title (at the top), the post contents (middle), and the username of the user who posted the blog (at the bottom). At the top of the page there is a button called "add post" that a user can press to go back to the starting screen and enter another blog. If you exit the site and return the blogs you entered will still be displayed. Each post is stored in local Storage and grabbed upon page startup.

To use this site simply open the page. This opens the starting page which contains input boxes for Music, Movies, Sports, and Games. Once the user chooses a category and clicks the 'start' button, they are taken to the 1st question of the category. Then the User clicks on the video(or views the image.) Once the user views video or image, Then they click on the start button. Then the user is required to choose the correct input asking a question related to its video, or image, within a time limit of 30 seconds. This process is repeated for 4 more rounds of questions. The users score will display the number of correct, and wrong answers from previous questions. 


## Code Snippit
This is a piece of code from the blog.js script. This takes all of the data from the LocalStorage and appends it to the page. The for loop is so that every blog is appended to the page, without it only 1 of the blogs would have been displayed. First it creates an article tag which is then filled with a h2, blockquote, and p tags. The h2 is for the title of the blog. Blockquote is for the main contents of the blog post. P is for displaying who posted said blog. 

````
function pageBuild (storage){
    for (let i=0; i < storage.length; i++){
        const article = document.createElement('article')
        pageBody.appendChild(article);

        const titleEl = document.createElement('h2')
        titleEl.textContent = storage[i].title;
        article.appendChild(titleEl);

        const bodyEl = document.createElement('blockquote')
        bodyEl.textContent = storage[i].body;
        article.appendChild(bodyEl);

        const usernameEl = document.createElement('p')
        usernameEl.textContent = `Posted by : ${storage[i].username}`;
        article.appendChild(usernameEl);

        article;
        pageBody.appendChild(article);
    }
};
````

## Credits

- Joshua pruitt, I created all of the new code. Functionallity for the website works because I added it. 

- Coding bootcamp team, the base javascript for displaying employees, the css styling, and the html file were all provided by them.

## Contact US

<a href="https://www.linkedin.com/in/joshua-pruitt-1a494a311/">My LinkedIn</a>
       
<a href="https://github.com/JoshuaPruitt">My GitHub</a>
    

## Technologies Used 

- Visual Studio Code, for writting code, debuging, and loging changes to the git repository.
- Bootstrap for the websites CSS.
- Google Chrome, for displaying the page and debugging said page using the console. 
- GitBash, for logging my changes and uploading my data.
- GitHub, for putting the page on the web and for providing cloud storage for storing the site and its changes.
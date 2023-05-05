# Web-Develop-Assignment

- School:	University of Aberdeen & South China Normal University
- Major:	Computer Science
- Name:	Ruofan Liao
- Student Number:	50079732
- Github:	https://github.com/LLLLLrf/Web-Develop-Assignment

## Structure Overview
### File Structure
```
Web-Develop-Assignment
├─ config.js
├─ index.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ router.js
└─ src
   ├─ data
   │  ├─ CardsData.json
   │  └─ Contents.json
   ├─ html
   │  ├─ AboutMe.html
   │  ├─ ChatPage.html
   │  ├─ DetailPage.html
   │  └─ RootPage.html
   ├─ image
   │  ├─ badminton.jpg
   │  ├─ collegelife1.jpg
   │  ├─ collegelife2.jpg
   │  ├─ music.jpg
   │  ├─ profile.jpg
   │  ├─ project1.jpg
   │  ├─ project2.jpg
   │  ├─ shenzhen1.jpg
   │  └─ shenzhen2.jpg
   ├─ javascript
   │  ├─ AboutMeScript.js
   │  ├─ ChatScript.js
   │  ├─ DetailScript.js
   │  ├─ RootScript.js
   │  └─ SideCard.js
   └─ style
      ├─ AboutMeStyle.css
      ├─ ChatStyle.css
      ├─ DetailStyle.css
      ├─ RootStyle.css
      └─ SideCard.css
```
### Web Structure
![web structure](preview_picture/web_structure.png "Web Structure")
## Basic design for the website
### Overview of the website
This website mainly consists of four pages, **home page**, **introduction page**, **about page** and **chat application**.
### Description of each pages
#### Home Page
This page is relatively simple, consisting of a welcome button and an animated background. I have implemented an animated background that flows like waves, when you hover the cursor over the button, the button will rotate.

The biggest ***challenge*** in this page is how to make the animated background in [RootStyle.css](src/style/RootStyle.css "RootStyle.css"). After searching on the internet, I found that on a blue background, created two irregular white ellipses that were larger than the screen size by using the pseudo-elements **:before** and **:after**, and defined a looping keyframe animation to make the pseudo-elements rotate continuously. This will result in a blue wave effect.
![Home Page](preview_picture/home.png "Home Page")
### Introduction Page
This page consist of a list of cards and a navigation sidebar. If you click on any of the cards, the webpage will navigate to the **about page** and display content and images related to the title of the card.

There were two main ***challenges*** I encountered in creating this page. Firstly, determining how to display different content and images on the about page when a different card is clicked. Secondly, how to maintain the navigation sidebar across different pages after navigating between them.

For the first challenge, in [AboutMeScript.js](src/javascript/AboutMeScript.js "AboutMe.js"), I first read data from [CardsData.json](src/data/CardsData.json "CardsData.json") by function getData(), and then by using function createCardHTML(), I turn all the data read from **JSON** file into **HTML** code. By using a for loop to listen for click events on each Card, the index of the iterated item is stored in the browser's local storage using **localStorage.setItem("index", i)**. This allows the index to be retrieved on the about page using **localStorage.getItem("index")**, which can then be used to determine which Card was clicked and display the corresponding content.
```javascript
// read data from json files
async function getData(jsonName) {
    let response = await fetch(`data/${jsonName}.json`);
    let data = await response.json();
    return data;
}
```
For the second challenge, I created a javascript file [SideCard.js](src/javascript/SideCard.js "navigation sidebar"). I included all the HTML code for the navigation sidebar in this file and inserted it into every HTML file that imported this JS file by using the following JS code. Therefore, all that is required to display the navigation sidebar in every HTML file is to import this JS file and include a **div** element with the **id="side-card-box"** in each HTML file where the sidebar is needed.



```javascript
window.onload = function(){
    document.getElementById("side-card-box").innerHTML = `HTML BODY`
}
```

![Introduction Page](preview_picture/intro.png "Introduction Page")

### About Page
This page consists of a text box and a navigation sidebar. When the content in the text box exceeds the height of the box, a scrollbar is generated. There is an arrow button located before the text title, which when clicked, takes the user back to the Introduction Page.

The biggest ***challenge*** in this page is how to display different content according to the index in local storage.
I first stored the detailed content and image to be displayed on each Card in [Contents.json](src/data/Contents.json "Contents.json"). Then, in [DetailScript.js](src/javascript/DetailScript.js "Detail Script"), I use the index from local storage to read the corresponding data in the JSON file. By using the function createCardHTML(), I generate the HTML code for the text box, then use the following JS code to involve them in the [DetailPage.html](src/html/DetailPage.html).
```javascript
   document.getElementById('title').textContent = contents[index].title;
   document.getElementById('content').innerHTML = main_content;
```
![About Page](preview_picture/detail.png "About Page")

### Chat Application
This page is the focal point of the assignment, and I will provide a detailed explanation of its implementation method and specifics.



![Chat Application](preview_picture/chat.png "Chat Application")

## Innovation and Advantages

## Shortcomings and Future Plans

## Reference List
1. https://www.php.cn/js-tutorial-413698.html
This article shows how to use JavaScript to get the current time and display it.
2. https://blog.csdn.net/weixin_44044705/article/details/106319784
I have learned how to use text-shadow in CSS3 to Implementing artistic text effect.
3. https://getcssscan.com/css-box-shadow-examples
This website provides different kinds of box shadow.
4. https://mp.weixin.qq.com/s/w1nVRSOYvBTatzoX2IzM4A
The design of the home page was inspired by this website
5. https://github.com/astrit/css.gg
This website provides me many svg icons
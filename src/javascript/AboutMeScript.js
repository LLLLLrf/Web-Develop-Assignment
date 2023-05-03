const cardsData = [
    {
      title: 'My Hometown',
      content: 'This is the content of card 1.'
    },
    {
      title: 'College Life',
      content: 'This is the content of card 2.'
    },
    {
      title: 'Hobbies',
      content: 'This is the content of card 3.'
    }
];

const contents = [
    {
        title: 'My Hometown',
        content1: "Hi, I'm Ruofan Liao, from Shenzhen, Guangdong Provience, China. The picture on the right is my hometown Shenzhen",
        content2: 'This is the second part of card 1'
    },
    {
        title: 'College Life',
        content1: 'This is the content of card 2.',
        content2: 'This is the second part of card 2'
    },
    {
        title: 'Hobbies',
        content1: 'This is the content of card 3.',
        content2: 'This is the second part of card 3'
    }
]




function createCardHTML(cardData,index) {
    return `
    <div class="card" id="card${index}">
        <div class="card-details">
            <p class="text-title">${cardData.title}</p>
            <p class="text-body">${cardData.content}</p>
        </div>
        <button class="card-button">More info</button>
    </div>
    `;
  }

// get current time
function getTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // fill 0 if the length of hours or minutes is 1
    if(hours.toString().length===1){hours="0"+hours.toString()}
    if(minutes.toString().length===1){minutes="0"+minutes.toString()}
    return `${hours}:${minutes}`;
}

// const cardsHTML = cardsData.map(cardData => createCardHTML(cardData));
const cardsHTML=[];
for(let i=0; i<cardsData.length; i++){
    cardsHTML.push(createCardHTML(cardsData[i],i));
}

const cardsContainer = document.getElementById('cards-container');
cardsContainer.innerHTML = cardsHTML.join('');



const cards = document.getElementsByClassName("card")
for(let i=0; i<cards.length; i++){
    cards[i].addEventListener("click", function(){
        localStorage.setItem('title', contents[i].title);
        localStorage.setItem('content1', contents[i].content1);
        localStorage.setItem('content2', contents[i].content2)
        localStorage.setItem('index', i);
        window.location.href = "/DetailPage";
    });
}

const home_button1 = document.getElementById("home");
const home_button2 = document.getElementById("Home");
const AboutMe = document.getElementById("AboutMe");
const ChatPage = document.getElementById("Forum");
const time = document.getElementById("time");
home_button1.addEventListener("click", function(){
    window.location.href = "/";
});
home_button2.addEventListener("click", function(){
    window.location.href = "/";
});
AboutMe.addEventListener("click", function(){
    window.location.href = "/AboutMe";
});
ChatPage.addEventListener("click", function(){
    window.location.href = "/ChatPage";
});
window.onload = function(){
    time.textContent = getTime();
}
setInterval(function(){
    time.textContent = getTime();
}, 5000);
const cardsData = [
    {
      title: 'Card 1',
      content: 'This is the content of card 1.'
    },
    {
      title: 'Card 2',
      content: 'This is the content of card 2.'
    },
    {
      title: 'Card 3',
      content: 'This is the content of card 3.'
    }
];

const contents = [
    {
        title: 'Card 1',
        content: 'This is the content of card 1.'
    },
    {
        title: 'Card 2',
        content: 'This is the content of card 2.'
    },
    {
        title: 'Card 3',
        content: 'This is the content of card 3.'
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
        localStorage.setItem('content', contents[i].content);
        window.location.href = "/DetailPage";
    });
}

const home_button1 = document.getElementById("home");
const home_button2 = document.getElementById("Home");
const AboutMe = document.getElementById("AboutMe");
const ChatPage = document.getElementById("Forum");
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
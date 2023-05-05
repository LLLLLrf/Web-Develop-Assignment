//  read data from json files
async function getData(jsonName) {
    let response = await fetch(`data/${jsonName}.json`);
    let data = await response.json();
    return data;
}

(async function() {
    // get data from json files
    const cardsData = await getData("CardsData");
    // create HTML code for each card
    const cardsHTML=[];
    for(let i=0; i<cardsData.length; i++){
        cardsHTML.push(createCardHTML(cardsData[i],i));
    }
    // add cards to the page
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = cardsHTML.join('');
    // add event listener to each card
    const cards = document.getElementsByClassName("card")
    for(let i=0; i<cards.length; i++){
        cards[i].addEventListener("click", function(){
            localStorage.setItem('index', i);
            window.location.href = "/DetailPage";
        });
    }
})();

// generate HTML code for each card
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
const cardsData = [
    {
      title: '&#x263a; My Hometown',
      content: 'Shenzhen, a modern city in southern China.'
    },
    {
      title: '&#x2723; College Life',
      content: 'Join student organizations and participate in subject competitions.'
    },
    {
      title: '&#x270e; My Projects',
      content: 'The projects I made in my spare time.'
    },
    {
      title: '&#x266b; Hobbies',
      content: 'Music & Sports!'
    },
    
];

const contents = [
    {
        title: 'My Hometown',
        content1: `Hi, I'm Ruofan Liao, from Shenzhen, Guangdong Provience, China. The picture on the right is my hometown Shenzhen, 
        I'm excited to tell you a bit about my hometown. Shenzhen is a major city in China, located in the southern part of the country, 
        right next to Hong Kong. It's a vibrant and dynamic place, with lots of things to see and do.`,
        content2: `One of the things that makes Shenzhen special is its history. It used to be a small fishing village, 
        but in the 1980s, it was designated as a special economic zone, which helped it to grow and develop into the bustling city it is today. Now, it's a hub of innovation, with lots of high-tech companies based here.
        `
    },
    {
        title: 'College Life',
        content1: `During my time in university, I actively participated in various student organizations and clubs. 
        As I became more involved, I was elected as the President of the Student Union in my sophomore year. 
        In this role, I was responsible for leading the team to organize various activities and events for the student body, 
        which required me to communicate effectively with other students, faculty and staff members. `,
        content2: `Apart from my duties as Student Union President, I also had numerous opportunities to deliver speeches and 
        participate in meetings during my daily campus life. These experiences helped me to develop my public speaking skills, 
        enhance my leadership abilities, and expand my network.
        Although my schedule was often packed, I found great satisfaction in being able to contribute to the university community and make a positive impact on the lives of my fellow students. Overall, my involvement in these activities has not only enriched my personal life, but also equipped me with valuable skills that will benefit me in my future endeavors.`
    },
    {
        title: 'My Projects',
        content1: 'This is the content of card 3.',
        content2: 'This is the second part of card 3'
    },
    {
        title: 'Hobbies',
        content1: 'This is the content of card 4.',
        content2: 'This is the second part of card 4'
    },
]

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
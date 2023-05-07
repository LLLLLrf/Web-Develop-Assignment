// read data from json files
async function getData(jsonName) {
    let response = await fetch(`data/${jsonName}.json`);
    let data = await response.json();
    return data;
}

(async function() {
    // get data from json files
    const contents = await getData("Contents");
    // get card index from local storage
    const index = localStorage.getItem('index');
    main_content=createContentHTML(contents[index].content1, contents[index].content2, contents[index].img1, contents[index].img2);
    // add cards to the page
    document.getElementById('title').textContent = contents[index].title;
    document.getElementById('content').innerHTML = main_content;
})();

// turn content data into HTML code
function createContentHTML(content1,content2,img1,img2) {
    return `
    <div class="" id="main-content">
        <div class="part1">
            <img class="detail-img1" src="${img1}"></img>
            <p class="text-body1">${content1}</p>
        </div>
        <div class="part2">
            <img class="detail-img2" src="${img2}"></img>
            <p class="text-body2">${content2}</p>
        </div>
    </div>
    `;
  }

// add event listener to exit button
const exit_button = document.getElementById("exit-button");
exit_button.addEventListener("click",function(){
    window.location.href = "/AboutMe"
})
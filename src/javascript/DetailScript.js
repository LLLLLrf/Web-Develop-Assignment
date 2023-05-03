const title = localStorage.getItem('title');
const content1 = localStorage.getItem('content1');
const content2 = localStorage.getItem('content2');
const index = localStorage.getItem('index');


function createCardHTML(content1,content2,img1,img2) {
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


if(index === "0"){
    main_content=createCardHTML(content1, content2, "/image/shenzhen1.jpg", "/image/shenzhen2.jpg");
}
if(index === "1"){
    main_content=createCardHTML(content1, content2, "/image/shenzhen1.jpg", "/image/shenzhen2.jpg")
}
if(index === "2"){
    main_content=createCardHTML(content1, content2, "/image/shenzhen1.jpg", "/image/shenzhen2.jpg")
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



document.getElementById('title').textContent = title;
document.getElementById('content').innerHTML = main_content;
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
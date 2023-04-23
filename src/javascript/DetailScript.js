const title = localStorage.getItem('title');
const content = localStorage.getItem('content');
document.getElementById('title').textContent = title;
document.getElementById('content').textContent = content;



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
window.onload = function(){

    fetch('html/SideCard.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("side-card-box").innerHTML = data;

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

        // redirect to other pages
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
        time.textContent = getTime();
        setInterval(function(){
        time.textContent = getTime();
        }, 5000);

    });
}
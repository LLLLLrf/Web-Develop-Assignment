const self_introduction=`I'm a second-year student of Aberdeen institute of data science and artificial intelligence 
                        in South China Normal University, majoring in Computer Science. This is my programming assignment 
                        for class <span style="font-weight: 700;">CS2053.</span> `

window.onload = function(){
    document.getElementById("side-card-box").innerHTML = `
    <div class="side-card">
        <div class="time" id="time"></div>
        <button class="tooltip" id="home">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
                fill="white"
            />
            </svg>
            <span class="tooltiptext">home</span>
        </button>
        
        <div> 
            <img src="/image/profile.jpg" alt="profile" class="circle">
            <div class="ripples"></div>
        </div>
        <div style="margin:86% 20px 0 66px;" class="side-content">
            <h3 style="font-weight: 700;height:10px">
                About Me
            </h3>
            <div style="word-break:keep-all;" class="self_intro">
                Hi, welcome to my website. I'm <span style="font-weight: 700;">Ruofan Liao.</span> <br>
                ${self_introduction} 
                <br>
            </div>

            <div class="user-list-box">
                <div class="user-head">
                </div>
                <div class="user-list" id="user-list"></div>
            </div>
        </div>

        <div class="links-box">
        <div class="quick-links">
            <div id="Home" class="quick-btn flex-center">
                <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
                    fill="black"
                />
                </svg>
                <span>Home</span>
            </div>

            <div id="AboutMe" class="quick-btn flex-center">
                <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM13 4H17C17.5523 4 18 4.44772 18 5V13H13V4ZM13 15V20H17C17.5523 20 18 19.5523 18 19V15H13ZM11 4H7C6.44771 4 6 4.44772 6 5V8H11V4ZM6 19V10H11V20H7C6.44772 20 6 19.5523 6 19Z"
                    fill="currentColor"
                />
                </svg>
                <span>AboutMe</span>
            </div>

            <div id="Forum" class="quick-btn flex-center">
                <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M17 9H7V7H17V9Z" fill="currentColor" />
                <path d="M7 13H17V11H7V13Z" fill="currentColor" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
                    fill="currentColor"
                />
                </svg>
                <span>Forum</span>
            </div>
        </div>
        </div>
    </div>
    `;

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
        
}
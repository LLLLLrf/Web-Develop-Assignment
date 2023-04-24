const chatBox = document.querySelector('.chat-box');
const messageList = chatBox.querySelector('.message-list');
const inputBox = chatBox.querySelector('.input-box');
const input = inputBox.querySelector('input[type="text"]');
const sendBtn = inputBox.querySelector('button[type="submit"]');
// 创建 WebSocket 连接
const socket = new WebSocket('ws://localhost:3000');

// 当连接成功时
socket.addEventListener('open', event => {
  console.log('WebSocket connected');

  // 当点击发送按钮时
  sendBtn.addEventListener('click', event => {
    event.preventDefault();
    const message = input.value.trim();
    console.log("send:",message);
    // 如果消息不为空，则发送消息
    if (message) {
      socket.send(message);
      input.value = '';
    }
  });

  // 当按下回车键时也可以发送消息
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      sendBtn.click();
    }
  });
});

// 当收到消息时
socket.addEventListener('message', event => {
  const messageBlob = event.data;
  const reader = new FileReader();
  reader.addEventListener('loadend', function () {
    const message = reader.result;
    console.log('Received message:', message);
    let Name = document.getElementById("input_username").value;
    if(Name===""){Name="Anonymous"}
    // 创建消息元素，并添加到消息列表中
    const messageItem = document.createElement('div');
    messageItem.classList.add('message-item');
    messageItem.innerHTML = `
      <span class="user-name">${Name}</span>
      <span class="message-text">${message}</span>
    `;
    messageList.appendChild(messageItem);
    // 滚动到底部
    messageList.scrollTop = messageList.scrollHeight;
  });
  reader.readAsText(messageBlob);
});

// 当连接关闭时
socket.addEventListener('close', event => {
  console.log('WebSocket disconnected');
});






// redirect to other pages
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
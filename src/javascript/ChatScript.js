// rewrite the alert function
function alert(message) {
  // add overlay
  const overlay = $('<div>').addClass('overlay');
  $('body').append(overlay);

  // add message box
  const msg = $('<div>').attr('id', 'msg');
  const msgCont = $('<div>').attr('id', 'msg_cont').text(message);
  const msgClear = $('<div>').attr('id', 'msg_clear').text('OK');
  msg.append(msgCont).append(msgClear);
  $('body').append(msg);
  // remove overlay and message box when click OK button
  msgClear.click(function() {
    overlay.remove();
    msg.remove();
  });
}

$(function () {
  const socket = io();
  let username = '';
  socket.emit('user list')

  $('#username-form').submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
    username = $('#username-input').val().trim();
    if(username === '') {
      alert('No username entered');
      return false;
    }
    if(username.length > 20) {
      alert('Username too long (max 20 characters)');
      return false;
    }
    // remove previous listener
    socket.off('user exists');
    // check if the username already exists
    socket.emit('user exists', username);
    socket.on('user exists', function(exist) {
      if(exist) {
        alert('Username already exists');
      }else{
        // add new user
        socket.emit('new user', username);
        socket.emit('user list')
        // automatically scroll to the bottom when the user list is updated
        setTimeout(function() {
          document.getElementById("user-list").scrollTop = document.getElementById("user-list").scrollHeight;
        }, 400);
        // hide the username input form and show the chat form
        $('#username').hide();
        $('#chat').show();
      }
    });
    return false;
  });

  $('#message-form').submit(function(e) {
    e.preventDefault();
    const msg = $('#message-input').val();
    if(username === '') {
      alert('Please enter a username first');
      return;
    }
    if(msg){
      socket.emit('chat message', msg);
      $('#message-input').val('');
      return false;
    }
  });

  setInterval(function() {
    socket.emit('numUsers');
  }, 1000);
  setInterval(function() {
    socket.emit('typingNum');
  }, 1000);
  setInterval(function() {
    noEnter();
  }, 1000);
  
  // if no enter, emit stop typing instantly
  function noEnter() {
    if(document.getElementById("message-input").value===""){
      socket.emit('stop typing');
    }
  }

  let previousValue = '';
  let typingTimer;

  document.getElementById("message-input").addEventListener("input", function(){
    const currentValue = this.value;
    // If the user hasn't entered a username yet, don't trigger the "typing" event
    if(username === '') {
      alert('Please enter a username first'); 
      return;
    }
    // If the input value is changed, then trigger the "typing" event
    if (currentValue !== previousValue) {
      clearTimeout(typingTimer);
      socket.emit('typing', username);
      typingTimer = setTimeout(function(){
        socket.emit('stop typing');
      }, 5000);
    }
    previousValue = currentValue;
  });

  socket.on('new user', function(user) {
    if(username === '') {return;}
    $('#message-list').append($('<div>').addClass('joined-text').text(`${user} joined the chat`));
  });

  socket.on('user left', function(user) {
    if(username === '') {return;}
    $('#message-list').append($('<div>').addClass('left-text').text(`${user} left the chat`));
  });

  // add message to the message list
  socket.on('chat message', function(data) {
    if(username === '') {return;}
    const { user, msg } = data;
    const messageClass = user === username ? 'message-right' : 'message-left';
    const message = $('<div>').addClass(`message-item ${messageClass}`);
    const usernameDiv = $('<div>').addClass('user-name').text(user);
    const messageText = $('<div>').addClass('message-text').text(msg);
    message.append(usernameDiv).append(messageText);
    $('#message-list').append(message);
    document.getElementById("message-list").scrollTop = document.getElementById("message-list").scrollHeight;
  });

  // real-time detection of the number of users "numUsers"
  socket.on('numUsers', function(data) {
    const { numUsers, registerUsers } = data;
    $('#numUsers').text(`online users: ${numUsers}`);
    $('#registerUsers').text(`registered users: ${registerUsers}`);
  });
  // real-time detection of whether a user is typing
  socket.on('typingNum', function(typingNum) {
    if(typingNum!==0) {
      $('#type-status').text(`${typingNum} user typing...`);
    } else {
      $('#type-status').text('Chat Box');
    }
  });

  // show the user list
  socket.on('user list', function(users) {
    $('#user-list').empty();
    for(let user_id in users) {
      const user = users[user_id];
      const userClass = user === username ? 'me' : 'other';
      const user_item = $('<div>').addClass(`user-item ${userClass}`).text(user);
      $('#user-list').append(user_item);
    }
  });
  // when click a user name, add "@username " to the input box and focus on the input box
  $(document).on('click', '.user-item', function() {
    const user = $(this).text();
    // add the user name to the input box
    $('#message-input').val(`@${user} `);
    // focus on the input box
    $('#message-input').focus();
  });
});
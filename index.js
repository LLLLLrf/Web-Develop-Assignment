const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const routes = require('./router.js');
const config = require('./config.js');
const hostname = config.hostname;
const port = config.port;

app.use(express.static('src'));

// use router middleware
app.use('/', routes);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/html/RootPage.html');
});

const users = {};
let numUsers = 0;
let registerUsers=0;
let typingUsers={};

io.on('connection', (socket) => {
    numUsers++;
    // console.log('a user connected');
    socket.on('disconnect', () => {
    // console.log('user disconnected');
    if (users[socket.id]) {
      io.emit('user left', users[socket.id]);
      delete typingUsers[socket.id];
      delete users[socket.id];
      registerUsers--;
    }
    numUsers--;
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', { user: users[socket.id], msg });
    });
    // return the user list
    socket.on('user list', () => {
        io.emit('user list', users);
    });
    // add new user
    socket.on('new user', (username) => {
        users[socket.id] = username;
        io.emit('new user', username);
        registerUsers++;
    });
    //detect the number of users
    socket.on('numUsers', () => {
        io.emit('numUsers', {numUsers:numUsers, registerUsers:registerUsers});
    });
    // detect the number of users typing
    socket.on('typing', (username) => {
        // console.log(Object.keys(typingUsers).length);
        // if username is not in typingUsers, then add it
        if(!typingUsers[socket.id]){
            typingUsers[socket.id] = username;
        }
    });
    socket.on('stop typing', () => {
        // if username is in typingUsers, then delete it
        if(typingUsers[socket.id]){
            delete typingUsers[socket.id];
        }
    });
    socket.on('typingNum', () => {
        io.emit('typingNum',Object.keys(typingUsers).length);
    });

    socket.on('user exists', (username) => {
        for(let user_id in users) {
            if(users[user_id]===username){
                socket.emit('user exists', true);
                return;
            }
        }
    socket.emit('user exists', false);
    });
});

http.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
    console.log(`If you're running locally, server running at http://${hostname}:${port}/`);
});
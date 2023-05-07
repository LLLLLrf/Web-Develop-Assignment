const express = require('express');
const router = express.Router();
const path = require('path');

// set routers for different pages
router.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/html/RootPage.html');
});

router.get('/DetailPage', function(req, res) {
  res.sendFile(__dirname + '/src/html/DetailPage.html');
});

router.get('/AboutMe', function(req, res) {
    res.sendFile(__dirname + '/src/html/AboutMe.html');
});

router.get('/ChatPage', function(req, res) {
    res.sendFile(__dirname + '/src/html/ChatPage.html');
});

// export router
module.exports = router;
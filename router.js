const express = require('express');
const router = express.Router();

// 设置路由
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

// 导出路由
module.exports = router;
const express = require('express');
const WebSocket = require('ws');
const routes = require('./router.js');

const app = express();

// 设置静态文件目录
app.use(express.static('src'));

// 使用路由中间件
app.use('/', routes);

// 创建WebSocket服务器
const wss = new WebSocket.Server({ server: app.listen(3000) });

// 监听连接事件
wss.on('connection', function (ws) {
  console.log('Client connected');

  // 监听消息事件
  ws.on('message', function (message) {
    console.log('Received message:', message);

    // 广播消息给所有的客户端
    wss.clients.forEach(function (client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log('服务器已启动，监听端口 127.0.0.1:3000');
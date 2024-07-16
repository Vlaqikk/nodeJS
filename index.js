const http = require('http');
const ws = require('ws');

const PORT = 8080;
const wss = new ws.Server({ noServer: true });
console.log('-----');

function accept(req, res) {
  // Check for WebSocket upgrade
  if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() !== 'websocket') {
    res.end();
    return;
  }

  // Check for Connection header
  if (!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end();
    return;
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
  ws.on('message', function (message) {
    const name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu)?.[0] || "Гость";
    ws.send(`Привет с сервера, ${name}!`);

    setTimeout(() => ws.close(1000, "Пока!"), 5000);
  });
}

// Handle WebSocket connection
wss.on('connection', (ws) => {
  console.log('New client connected');
});

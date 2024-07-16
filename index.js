const http = require('http');
const WebSocket = require('ws');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('WebSocket server is running');
});

const wss = new WebSocket.Server({ server });

let remainingTime = 60; // Таймер на 60 секунд

const timer = setInterval(() => {
    remainingTime++;
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(remainingTime.toString());
        }
    });
}, 1000);

wss.on('connection', (ws) => {
    ws.send(`Timer started: ${remainingTime} seconds`);

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Обработка полученного сообщения
        // Например, можно отправить сообщение обратно всем клиентам
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Received: ${message}`);
            }
        });
    });
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log('WebSocket server is running');
});

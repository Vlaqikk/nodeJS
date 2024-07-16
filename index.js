const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

let remainingTime = 60; // Таймер на 60 секунд

const timer = setInterval(() => {
    remainingTime++;
    console.log(remainingTime);
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

console.log('WebSocket server is running on ws://localhost:5000');

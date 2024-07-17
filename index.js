// const http = require('http');
// const WebSocket = require('ws');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end('WebSocket server is running');
// });

// const wss = new WebSocket.Server({ server });

// let elapsedTime = 0; // Таймер на 60 секунд

// const timer = setInterval(() => {
//     elapsedTime++;
//     console.log(elapsedTime);
//     wss.clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(elapsedTime.toString());
//         }
//     });
// }, 1000);

// wss.on('connection', (ws) => {
//     ws.send(`Timer started: ${elapsedTime} seconds`);

//     ws.on('message', (message) => {
//         console.log(`Received message: ${message}`);
//         // Отправка сообщения обратно всем клиентам
//         wss.clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(`Received: ${message}`);
//             }
//         });
//     });
// });

// const PORT = 5000;

// server.listen(PORT, () => {
//     console.log('WebSocket server is running on ws://localhost:5000');
// });



const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`server start on port ${PORT}`);
        })
    } catch (error) {
        console.log(e);
    }
}

start();
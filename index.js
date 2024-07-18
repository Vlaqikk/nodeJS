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



// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');
// // mongoose.connect(`mongodb+srv://ilinskyvladislav2002:!Mogilev2002@cluster0.vvw4bqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

// async function testMongo(){
//     await mongoose.connect(`mongodb+srv://ilinskyvladislav2002:!Mogilev2002@cluster0.vvw4bqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// }

// const kittySchema = new mongoose.Schema({
//     name: String
// });

// kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? 'Meow name is ' + this.name
//       : 'I don\'t have a name';
//     console.log(greeting);
//   };
  
//   const Kitten = mongoose.model('Kitten', kittySchema);

//   const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save();
// fluffy.speak();

// const kittens = Kitten.find();
// console.log(kittens);


const express = require('express');
const { connectToDb, getDb } = require('./db');

const PORT = 3000;

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});
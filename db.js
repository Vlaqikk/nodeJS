const { MongoClient } = require('mongodb');

const URL = 'mongodb+srv://ilinskyvladislav2002:!Mogilev2002@cluster0.vvw4bqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient
      .connect(URL)
      .then((client) => {
        console.log('Connected to MongoDB');
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
}
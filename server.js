const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config').getConfig();

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.MONGODB_URL, { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log(err);
  }
  require('./app/routes')(app, client.db());
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});

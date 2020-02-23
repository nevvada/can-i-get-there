const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const xmlParser = new xml2js.Parser({ explicitArray: false });

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.use('/build', (req, res) =>
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
);

app.get('/', (req, res) =>
  res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, '../index.html'))
);

    app.get('/elevators', (req, res) => {
      axios
        .get('http://web.mta.info/developers/data/nyct/nyct_ene.xml')
        .then(result => res.send(xmlParser.toJson(result.data)))
        .catch(err => console.error(err));
    });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
  });

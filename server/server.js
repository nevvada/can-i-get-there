const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const xml2js = require('xml2js');

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
  console.log('hit it')
  axios
    .get('http://web.mta.info/developers/data/nyct/nyct_ene.xml')
    .then(response => {
      // console.log('ressss', res.data)
      const parsedXML = xmlParser.parseString(response.data, (err, result) => {
        console.log('ressss', result)
        res.send(result);
      });
    })
    // .then(result => {console.log('woah', result)})
    .catch(err => console.error(err));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

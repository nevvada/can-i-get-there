const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const axios = require('axios');
const xmlParser = require('xml2json');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/elevators', async (req, res) => {
      const elevatorXML = await axios
        .get('http://web.mta.info/developers/data/nyct/nyct_ene.xml')
        .then(res => res.data);
      const elevatorJSON = await xmlParser.toJson(elevatorXML);
      res.send(elevatorJSON);
    });

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, err => {
      if (err) throw err;
      console.log(`Ready at ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const axios = require('axios');
const xmlParser = require('xml2json');

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

    app.get('/elevators', (req, res) => {
      axios
        .get('http://web.mta.info/developers/data/nyct/nyct_ene.xml')
        .then(result => res.send(xmlParser.toJson(result.data)))
        .catch(err => console.error(err));
    });

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(PORT, err => {
      if (err) throw err;
      console.log(`Ready at ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

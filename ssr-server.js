const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const stationData = require('./data/subway_stations.json');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/subways', (req, res) => {
      console.log('hit it');
      res.send(stationData);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

// app.get('/subways', (req, res) => {
//   res.send(stationData);
// });

const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const port = 3009;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  next();
});

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});

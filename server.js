const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

console.log('http://localhost:8080')

app.listen(8080);

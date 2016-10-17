var express = require('express');
var app = express();
app.post('/', function (req, res) {
  res.send('Hello world!');
});
app.listen(8888);

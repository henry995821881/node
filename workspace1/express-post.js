var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql   = require('mysql');
var connection = mysql.createConnection({
 host   : 'localhost',
 user   : 'root',
 password : '123456',
 database : 'spider_taobao'
});
 connection.connect();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));



app.post('/post', urlencodedParser, function (req, res) {

   
var str =	req.body.arr;
    
console.log(str);

res.send("end");
    
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("s", host, port)

})



     
    

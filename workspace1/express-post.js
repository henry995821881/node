var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));



app.post('/post', urlencodedParser, function (req, res) {

   
   response = {
       first_name:req.body.arr,
      
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("s", host, port)

})
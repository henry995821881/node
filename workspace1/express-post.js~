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

   
	var items = eval("("+req.body.arr+")");
         insertDB(items);
    

res.end("end");
console.log("end")
    
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("s", host, port)

})



//////
function insertDB(items){

 
	for(i in items){
var  sql = 'insert into dangdang (price,title,comment,link,img) values(?,?,?,?,?)';
//price È¥µô£¤
var p = items[i].price.substring(1);
//È¥µô.00
var p_= p.substring(0,p.indexOf(".")!=-1 ? p.indexOf("."): p.length );
	var  params = [p_,items[i].title,items[i].comment,items[i].link,items[i].img];

     connection.query(sql,params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
        console.log("success");
      // console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
     //  console.log('INSERT ID:',result);        
      // console.log('-----------------------------------------------------------------');  
     });


      }
     
     

}

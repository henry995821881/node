var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var iconv = require("iconv-lite");

var options ={
	url:"http://search.dangdang.com/?key=%C4%DA%B4%E6%CC%F5&act=input",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	

	
 
	var buff = iconv.encode(body,'GBK');
	var b = iconv.decode(buff,"utf8");
	console.log(b);

	   fs.writeFile("./test6.html",b,"utf-8",function(err){
	   
		   if(!err){
		   
			   console.log("saved");
		   }
	   
	   });
           
	}


}

request(options,callback);



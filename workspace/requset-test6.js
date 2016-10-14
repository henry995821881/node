var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options ={
	url:"http://www.taobao.com",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	
	   fs.wirteFile("./test6.html",body,"utf-8",function(err){
	   
		   if(!err){
		   
			   console.log("saved");
		   }
	   
	   });
           
	}


}

request(options,callback);



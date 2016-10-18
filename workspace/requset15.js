var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options ={
	url:"http://192.168.0.102/cgi-bin/spider.py?arr=werljkfs",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	
	   console.log(body);
           
	}


}

request(options,callback);



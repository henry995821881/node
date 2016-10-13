var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options ={
	url:"http://blog.csdn.net/dojotoolkit/article/details/7598226",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	
	   console.log(body);
           
	}


}

request(options,callback);



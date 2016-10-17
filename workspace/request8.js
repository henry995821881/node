var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var path = "./8.txt";






fs.readFile("./8.txt","utf-8",function(err,data){
	
	if(err){
		
		console.log("parse :"+path+"  fail");
		return;
	}
	
	console.log(data);
	    

	
});

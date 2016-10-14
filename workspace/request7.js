var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var path = "./test9.txt";






fs.readFile("./test9.txt","utf-8",function(err,data){
	
	if(err){
		
		console.log("parse :"+path+"  fail");
		return;
	}
	

	     var $ =  cheerio.load(data);
	
	    var $items_div =   $("#content_left .result");
	     console.log($items_div.length);
	    $items_div.each(function(i,elem){
	        
	    	
			fs.writeFile("./t.txt",$(this).find(".c-abstract").html()+"\r\n\r\n",{flag:"a"},
			function(err){
		
		});
		
	    

	    });
	
});

var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options ={
	url:"https://s.taobao.com/search?q=%E6%89%8B%E6%9C%BA&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.50862.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20161014",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	
	   fs.writeFile("./test6.html",body,"utf-8",function(err){
	   
		   if(!err){
		   
			   console.log("saved");
		   }
	   
	   });
           
	}


}

request(options,callback);



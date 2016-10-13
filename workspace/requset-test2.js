var request = require('request');
var fs = require('fs');

var options ={
	url:"http://www.baidu.com",
	header:{
		'User-Agent' :'request'
	}

};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	

		opt(body);

	}


}

function opt(string){

	fs.writeFile('./test2.html',string,'utf-8',function(err){
	
		if(err){
		
			throw err;
		}
	
	});



	fs.readFile('./test2.html','utf-8',function(err,data){
	
		if(err){
		throw err;
		}
		console.log(data);
	
	
	});


}
request(options,callback);



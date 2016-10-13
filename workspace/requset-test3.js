var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var options ={
	url:"http://www.baidu.com",


};



function callback(error,response,body){

	if(!error && response.statusCode == 200){
	
	
            //  for(e in response.headers){
	      
	//      console.log(e);
	    //  }

             console.log(response.headers['set-cookie']);

          //   var $ =cheerio.load(body);
	   // var ie = $("[name='ie']").val();
	  //   var f =$("input[name='f']").val();
	   // var rsv_bp=$("input[name='rsv_bp']").val();
	   
            //  console.log(ie);
            //  console.log(f);
             // console.log(rsv_bp);
	      
	    
	}


}

request(options,callback);



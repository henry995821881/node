var cheerio =require("cheerio");
var request =require("request");
var fs = require("fs");


request({url:"https://s.taobao.com/search?ie=utf8&initiative_id=staobaoz_20161013&stats_click=search_radio_all%3A1&js=1&imgfile=&q=%E6%89%8B%E6%9C%BA&suggest=0_1&_input_charset=utf-8&wq=shouj&suggest_query=shouj&source=suggest&p4ppushleft=5%2C48&s=144"},
		
		function(err,response,body){

// fs.writeFile("./t.txt",body,"utf-8",function(err){
 
// });
	var $ = cheerio.load(body);


      console.log($("*").html());

});

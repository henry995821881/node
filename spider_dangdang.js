/**
 * 
 * �����ͨ param items condition
 * ǰ����ʹ����jquery
 * item_text item ȡtext���������� item_link item ȡ href������
 * 
 * 
 */
function parseDom(items, item_text, item_link,item_img) {

	var items_ = $(items);

	var items_json = [];

	items_.each(function(index, ele) {

		var item = $(this);
		var item_ = {};

		for (name in item_text) {

			item_[name] = item.find(item_text[name]).text();

		}

		for (name in item_link) {

			item_[name] = item.find(item_link[name]).attr("href");

		}

		for (name in item_img) {

			item_[name] = item.find(item_img[name]).attr("src");

		} 
		
		items_json.push(item_);

	});

	return items_json;

}

var item_text = {
	
    price:".price > span",
    title:".name > a",
    comment:".star a"
    
};
var item_link = {
	link : "a.pic"
		
};

var item_img={
		
		img:".pic > img"
		
};
var items = "li[class*='line']";

var jsonObj = parseDom(items, item_text, item_link,item_img);
var str = JSON.stringify(jsonObj);
console.log(str);

$.post("http://192.168.0.200:8888/post", {
	'arr' : str
}, function(data) {

	console.log(data);

});





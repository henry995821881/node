var cheerio = require("cheerio"),
    $ =cheerio.load('<h1 class="title">helo</h1>')
$('h1.title').text('hellow there');
$('h1').addClass("welcome");

console.log($.html());


    var express = require('express');    
    var app = express();   
    app.configure(function() {  
      //��?��v��Express��s�m��?�@��?��??���́C������?���v����bodyParser��?���C�p������  
      //application/x-www-form-urlencoded�aapplication/json  
      //?���́C��c?�ʑ���req.body�B��?�ȑ����ʓI?�q���g�g�p�h��?��[?����?POST�\�擞?���Q���I?]�F     
      app.use(express.bodyParser());  
    });  
      
    //?��POST?��  
    //name�aemail��POST?���撆�I�Q����  
    app.post('/hello', function(req, res) {  
        console.log(req.body.name);  
        console.log(req.body.email);  
        res.send('Post Over');    
    });  
      
    post_mtd = function(req,res){  
      res.send('�䐥Wujintao');  
    }  
    //����???�`�����Ifunction�ωȒ�?�݊O���C�R�@��?���@�����B�������@post_mtd�v�݈��p���O��?  
    app.post("/wujintao",post_mtd);  
      
    //����app.get�Aapp.post??�`���O�C?�ȍїp�Fapp.all��?��all�\��get,post���C����??�������C���R��Ȏw��?�^?����I?�������B  
    //����app['get']('/path', function(req,res));??�`���B  
      
    //?�݉�?��a?�ߒ[�����C?�papp.listen()���@�C�ڝ���?�I�Q���C��@�F  
    app.listen(8080);    
    console.log('Listening on port 8080');  

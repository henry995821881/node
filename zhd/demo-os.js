var os = require('os')

for(a in os){


        //console.log(typeof os[a]);

	if(typeof os[a] == 'function'){
	
		console.log(a+":");
		console.log(os[a]());

	}
}




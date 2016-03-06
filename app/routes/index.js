var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app){

	app.get('/', function(req,res){
		res.sendFile(process.cwd() + '/public/index.html');
	})
	
	app.post('/file',upload.single('fileSizeCheck'), function(req,res){
		var rspstr = 'file size: ' + req.file.size + ' bytes'
    	console.log(rspstr);
    	res.send({message: rspstr});
	})
	
}
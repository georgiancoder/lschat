class mainController {
	constructor(){
	}

	home(req,res){
		let options = {
			jsFiles: req.jsFiles,
			cssFiles: req.cssFiles
		}
		res.render('home', options);
	}

	register(req,res){
		let options = {
			jsFiles: req.jsFiles,
			cssFiles: req.cssFiles
		}
		res.render('register',options);
	}
}

module.exports = new mainController();
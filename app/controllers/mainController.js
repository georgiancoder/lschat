class mainController {
	home(req,res){
		let options = {
			jsFiles: req.jsFiles,
			cssFiles: req.cssFiles
		}
		res.render('home', options);
	}
}

module.exports = new mainController();
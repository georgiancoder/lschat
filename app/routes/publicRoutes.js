const express = require('express');
const Router = express.Router();
const mainController = require('../controllers/mainController');
const fs = require('fs');


// every route middleware
Router.get('*',(req,res,next)=>{
	let jsFiles = fs.readdirSync(process.cwd() + '/public/js/');
	let cssFiles = fs.readdirSync(process.cwd() + '/public/css/');
	jsFiles = jsFiles.filter(file=>{
		let patt = /.js$/gi;
		return patt.test(file);
	});
	cssFiles = cssFiles.filter(file=>{
		let patt = /.css$/gi;
		return patt.test(file);
	});
	req.jsFiles = jsFiles;
	req.cssFiles = cssFiles;
	next();
});

// get routes

Router.get('/',mainController.home);

// post routes


// put routs


// delete routes


module.exports = Router;
const express = require('express');
const Router = express.Router();
const mainController = require('../controllers/mainController');
const fs = require('fs');


// every route middleware
Router.get('*', (req, res, next) => {
    let cssPath = process.cwd() + '/public/css/';
    let jsPath = process.cwd() + '/public/js/';
    let jsFiles = [];
    let cssFiles = [];
    if (fs.existsSync(cssPath)) {
        // Do something
        cssFiles = fs.readdirSync(cssPath);
        cssFiles = cssFiles.filter(file => {
            let patt = /.css$/gi;
            return patt.test(file);
        });
    }
    if (fs.existsSync(jsPath)) {
        // Do something
        jsFiles = fs.readdirSync(jsPath);
        jsFiles = jsFiles.filter(file => {
            let patt = /.js$/gi;
            return patt.test(file);
        });
    }

    req.jsFiles = jsFiles;
    req.cssFiles = cssFiles;
    next();
});

// get routes

Router.get('/', mainController.home);

// post routes


// put routs


// delete routes


module.exports = Router;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const publicRoutes = require('./app/routes/publicRoutes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001;

mongoose.connect('');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('asd'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use('/',publicRoutes);


app.listen(PORT,(err)=>{
	if(err){
		console.log(err);
	}
});

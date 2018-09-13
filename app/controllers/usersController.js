const mongoose = require('mongoose');
const Users = require('../models/users');
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');

class usersController {

	register(req,res){
		let validationErrors = [];
		if(validator.isEmpty(req.body.name, {ignore_whitespace:true})){
			validationErrors.push({input: 'name', msg: 'first name field is emty'});
		}
		if(validator.isEmpty(req.body.username, {ignore_whitespace:true})){
			validationErrors.push({input: 'username', msg: 'username is required'})
		}
		if(validator.isEmpty(req.body.password, {ignore_whitespace: true})){
			validationErrors.push({input: 'password', msg: 'password is required'})
		}

		if(validationErrors.length){
			res.json(validationErrors);
		}else{
			//register user
			Users.findOne({username: req.body.username},(err, user)=>{
				if(err){
					console.log(err);
				}else{
					if(user != null){
						res.send('username is already taken please take another');
					}else{
						let newUser = new Users();
						newUser.name = req.body.name;
						newUser.username = req.body.username;
						let hash = bcrypt.hashSync(req.body.password);
						newUser.password = hash;
						newUser.save((err,savedUser)=>{
							if(err){
								console.log(err);
							}else{
								res.redirect('/');
							}
						});
					}
				}
			});
		}

		
	}
	login(req,res){

	}
	isAuthenticated(req,res,next){

	}

}

module.exports = new usersController();
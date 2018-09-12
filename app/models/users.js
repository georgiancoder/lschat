const mongoose = require('mongoose');

let usersSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	online: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('users',usersSchema);
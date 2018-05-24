const path = require('path');
const models = require('../models')

exports.index = function(req, res) {
	json = {
		"api": "v2"
	}
	res.send(json);
}

exports.add = function(req, res) {
	
	var hello = req.body.hello;
	console.log(hello);

	json = {
		"api": "add"
	}
	res.send(json);
}

exports.getUser = function(req, res) {

	queryParams = {
		where: {
			user_id: req.body.user_id,
		},
		order: [
			['created_at', 'DESC']
		]
	};

	models.User.findOne(queryParams).then( user => {
		var json = {
			"firstname": user.firstname,
			"lastname": user.lastname
		}
		res.json(json);
	});
	
}
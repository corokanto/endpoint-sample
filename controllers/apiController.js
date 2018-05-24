const path = require('path');

exports.index = function(req, res) {
	json = {
		"api": "v2"
	}
	res.send(json);
}
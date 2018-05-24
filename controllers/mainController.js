const path = require('path');

exports.test = function(req, res) {
	json = {
		"firstname": "Olivier",
		"lastname": "Deknop"
	};
	res.json(json);
}
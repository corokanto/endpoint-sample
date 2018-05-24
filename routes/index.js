var express = require('express');
var router = express.Router();

var mainController = require('../controllers/mainController');

/// Index Routes ///

router.get('/', mainController.test);

module.exports = router;
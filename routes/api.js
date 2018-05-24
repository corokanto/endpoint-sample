var express = require('express');
var router = express.Router();

// Require controller modules;
var apiController = require('../controllers/apiController');

/// API Routes ///

/* GET  */
router.get('/', apiController.index);

module.exports = router;
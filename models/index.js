const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Load models
var models = [
  'User', // To be continued...
];

var db = {};

models.forEach(function(model) {
  db[model] = sequelize.import(__dirname + '/' + model)
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
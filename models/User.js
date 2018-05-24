var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		fid: Sequelize.BIGINT,
	}
};
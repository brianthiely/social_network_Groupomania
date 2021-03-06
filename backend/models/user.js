"use strict";
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// create associations
			models.User.hasMany(models.Post)
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				required: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: false,
				required: true,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: false,
				required: true,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
                defaultValue: false
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};

'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class wears extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    wears.init({
        wear: DataTypes.STRING,
        temperature: DataTypes.STRING,
        gender: DataTypes.STRING,
        category: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'wears',
    });
    return wears;
};
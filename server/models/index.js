const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};

// Sequelize 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require(`./User`)(sequelize, Sequelize);
db.Board = require(`./Board`)(sequelize, Sequelize);

module.exports = db; // 모듈화
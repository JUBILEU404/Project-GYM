const dbConfig = require("../config/db.config");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool:{ 
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
    } );
const db = {};
db.Sequelize = Sequelize;
db.Sequelize = sequelize;

db.alunos = require("./item.model")(sequelize, Sequelize);
db.professores = require("./item.model")(sequelize, Sequelize);

module.exports = db;
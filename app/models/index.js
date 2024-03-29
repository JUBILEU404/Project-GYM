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

db.alunos = require("./aluno.model")(sequelize, Sequelize);
db.professores = require("./professor.model")(sequelize, Sequelize);
db.exercicio = require("./exercisios.model")(sequelize, Sequelize);
db.treinos = require("./treino.model")(sequelize, Sequelize);

db.treinos.hasMany(db.alunos,{as:'aluno'});
db.alunos.belongsTo(db.treinos,{
    foreignKey:'treino_id',
    as:'treinos'
});

db.treinos.hasMany(db.exercicio,{as:'exercicio'});
db.exercicio.belongsTo(db.treinos,{
    foreignKey:'treino_id',
    as:'treinos'
});

db.treinos.hasMany(db.professores,{as:'professores'});
db.professores.belongsTo(db.treinos,{
    foreignKey:'treino_id',
    as:'treinos'
});


module.exports = db;
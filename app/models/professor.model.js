module.exports = (sequelize, Sequelize) =>{
    const Professores = sequelize.define("professores", {
      treino_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'treinos',
          key: 'id'
        }
      },
      nome: {
          type: Sequelize.STRING,
        },
        idade: {
          type: Sequelize.INTEGER,
        },
        telefone: {
          type: Sequelize.STRING,
        },
        cpf: {
          type: Sequelize.STRING,
        },
        salario: {
          type: Sequelize.FLOAT,
        },
        ja_deu_aula: {
          type: Sequelize.BOOLEAN,
        }
      });
    return Professores;
};
module.exports = (sequelize, Sequelize) => {
    const Treino = sequelize.define("treinos", {
      exercicio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercicios',
          key: 'id'
        }
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professores',
          key: 'id'
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'alunos',
          key: 'id'
        }
      },
      nome:{
        type: Sequelize.STRING,
      },
      executou: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Treino;
  };
  
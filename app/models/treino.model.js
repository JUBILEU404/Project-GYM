module.exports = (sequelize, Sequelize) => {
    const Treino = sequelize.define("treino", {
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
      executou: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Treino;
  };
  
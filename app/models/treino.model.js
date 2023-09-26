module.exports = (sequelize, Sequelize) => {
    const Treino = sequelize.define("treino", {
      exercicio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercicios',
          key: 'id',
          autoincremento: true,
        ForeignKey :true

        }
      },
      professor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professores',
          key: 'id',
          autoincremento: true,
        ForeignKey :true
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'alunos',
          key: 'id',
          autoincremento: true,
        ForeignKey :true
        }
      },
      executou: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Treino;
  };
  
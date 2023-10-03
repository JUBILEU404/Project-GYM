module.exports = (sequelize, Sequelize) => {
    const Exercicio = sequelize.define("exercicio", {
      treino_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'treinos',
          key: 'id'
        }
      },
      tipo: {
        type: Sequelize.STRING,
      },
      series: {
        type: Sequelize.INTEGER,
      },
      repeticoes: {
        type: Sequelize.INTEGER,
      },
      ja_treino: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Exercicio;
  };
  
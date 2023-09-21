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
      repeticoes: {
        type: Sequelize.INTEGER,
      },
      praticou: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Exercicio;
  };
  
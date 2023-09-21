module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("aluno", {
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
    is_flammable: {
      type: Sequelize.BOOLEAN,
    }
  });

  return Aluno;
};

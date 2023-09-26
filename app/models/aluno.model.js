module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("aluno", {
    treino_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'treinos',
        key: 'id',
        autoincremento: true,
        ForeignKey :true

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
    praticou: {
      type: Sequelize.BOOLEAN,
    }
  });

  return Aluno;
};

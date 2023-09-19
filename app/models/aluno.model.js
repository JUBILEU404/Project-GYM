module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define("aluno", {
    professor_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'professores',
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

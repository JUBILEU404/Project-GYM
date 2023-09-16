module.exports = (sequelize, Sequelize) => {
    const Aluno = sequelize.define("aluno", {
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
  
    const Professor = sequelize.define("professor", {
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
      is_flammable: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return { Aluno, Professor };
  };
  
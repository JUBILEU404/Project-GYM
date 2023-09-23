const db = require("../models");
const Professor = db.professores;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
        return;
    }

    const professor = {
        treino_id: req.body.treino_id,
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        salario: req.body.salario,
        ja_deu_aula: req.body.ja_deu_aula ? req.body.ja_deu_aula : false
    };

    Professor.create(professor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao criar o professor."
            });
        });
};

exports.findAll = (req, res) => {
    const nome = req.body.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Professor.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao listar os professores."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Professor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Não foi possível encontrar um professor com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar encontrar um professor com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Professor.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O professor foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar o professor com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar atualizar o professor com o id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Professor.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O professor foi apagado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível apagar o professor com o id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar apagar o professor com o id = " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Professor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} itens foram apagados com sucesso.` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao tentar apagar todos os professores solicitados."
            });
        });
};

exports.findAllFlammables = (req, res) => {
    Professor.findAll({
        where: { ja_deu_aula: true }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Ocorreu um erro ao tentar encontrar todos os professores inflamáveis: ${err.message}`
            });
        });
};

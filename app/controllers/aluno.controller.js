const db = require("../models");
const Aluno = db.alunos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
        return;
    }
    const aluno = {
        treino_id: req.body.treino_id,
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        is_flammable: req.body.is_flammable ? req.body.is_flammable : false
    };

    Aluno.create(aluno)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao criar o aluno."
            });
        });
};

exports.findAll = (req, res) => {
    const nome = req.body.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Aluno.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao listar os Alunos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Aluno.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Não foi possível encontrar um aluno com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar encontrar um aluno com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Aluno.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O aluno foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar o aluno com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar atualizar o aluno com o id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Aluno.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O aluno foi apagado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível apagar o aluno com o id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar apagar o aluno com o id = " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Aluno.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} itens foram apagados com sucesso.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar apagar todos os alunos solicitados."
            });
        });
};

exports.findAllFlammables = (req, res) => {
    Aluno.findAll({ where: { is_flammable: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao tentar buscar os alunos inflamáveis."
            });
        });
};

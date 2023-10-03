const db = require("../models");
const Treino = db.treinos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
        return;
    }
    const treino = {
        exercicio_id: req.body.exercicio_id,
        professor_id: req.body.tipo,
        aluno_id: req.body.aluno_id,
        nome: req.body.nome,
        executou: req.body.executou ? req.body.executou : false
    };

    Treino.create(treino)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao criar o treino."
            });
        });
};

exports.findAll = (req, res) => {
    const nome = req.body.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Treino.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao listar os treinos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Treino.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Não foi possível encontrar um treino com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar encontrar um treino com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Treino.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O treino foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar o treino com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar atualizar o treino com o id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Treino.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O treino foi apagado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível apagar o treino com o id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar apagar o treino com o id = " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Treino.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} itens foram apagados com sucesso.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar apagar todos os treinos solicitados."
            });
        });
};

exports.findAllFlammables = (req, res) => {
    Treino.findAll({ where: { executou: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao tentar buscar os treinos inflamáveis."
            });
        });
};
exports.findbyName = (req, res) => {
    const name = req.body.play1;
       Treino.findAll({ where: { name: { [Op.like]: `%${name}%` } } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao listar os treinos."
            });
        })};

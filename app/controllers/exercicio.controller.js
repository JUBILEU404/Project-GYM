const db = require("../models");
const Exercicio = db.exercicio;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.tipo) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
        return;
    }
    const exercicio = {
        treino_id: req.body.treino_id,
        tipo: req.body.tipo,
        series: req.body.series,
        repeticoes: req.body.repeticoes,
        ja_trein: req.body.ja_trein ? req.body.ja_trein: false
    };

    Exercicio.create(exercicio)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao criar o exercicio."
            });
        });
};

exports.findAll = (req, res) => {
    const tipo = req.body.tipo;
    var condition = tipo ? { tipo: { [Op.like]: `%${tipo}%` } } : null;

    Exercicio.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao listar os exercicios." // nao ta querendo aparece
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Exercicio.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Não foi possível encontrar um exercicio com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar encontrar um exercicio com o id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Exercicio.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O exercicio foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar o exercicio com o id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar atualizar o exercicio com o id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Exercicio.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "O exercicio foi apagado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível apagar o exercicio com o id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocorreu um erro ao tentar apagar o exercicio com o id = " + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Exercicio.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} itens foram apagados com sucesso.` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algum erro ocorreu ao tentar apagar todos os exercicios solicitados."
            });
        });
};
exports.findAllFlammables = (req, res) => {
    Exercicio.findAll({ where: {  ja_treino: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algum erro ocorreu ao tentar buscar os execicios inflamáveis."
            });
        });
};


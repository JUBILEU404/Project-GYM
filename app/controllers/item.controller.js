const db = require("../models");
const Aluno = db.alunos;
const Professor = db.professores;
const Op = db.Sequelize.Op;

exports.createAluno = (req, res) => {
    if (!req.body.nome){
        res.status(400).send({
            message: "As informações não podem estar vazias"
        });
        return;
    }

    const aluno = {
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
                message: err.message || "Ocorreu um erro ao tentar criar o aluno."
            });
        });
};

exports.createProfessor = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "As informações não podem estar vazias"
        });
        return;
    }

    const professor = {
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        salario: req.body.salario,
        is_flammable: req.body.is_flammable ? req.body.is_flammable : false
    };

    Professor.create(professor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao tentar criar o professor."
            });
        });
};

exports.findOneAluno = (req, res) => {
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

exports.findOneProfessor = (req, res) => {
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

exports.updateAluno = (req, res) => {
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

exports.updateProfessor = (req, res) => {
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
exports.deleteAluno = (req, res) => {
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

exports.deleteProfessor = (req, res) => {
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

exports.deleteAllAluno = (req,res) => {
    Aluno.destroy({
        where: {},
        truncate: false
    })
    .then(nums =>{
        res.send({ message: `${nums} Itms foram apagados com sucesso.`});
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro occreu ao tenta apagar todos os items solicitados"
        });
    });
    };
    exports.deleteAllProfessor = (req,res) => {
        Professor.destroy({
            where: {},
            truncate: false
        })
        .then(nums =>{
            res.send({ message: `${nums} Itms foram apagados com sucesso.`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Algum erro occreu ao tenta apagar todos os items solicitados"
            });
        });
        };
        exports.findAllFlammablesAluno = (req, res) => {
            Aluno.findAll({
                where: { is_flammable: true }
            })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: `Ocorreu um erro ao tentar encontrar todos os alunos inflamáveis: ${err.message}`
                });
            });
        };
        
        exports.findAllFlammablesProfessor = (req, res) => {
            Professor.findAll({
                where: { is_flammable: true }
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
        
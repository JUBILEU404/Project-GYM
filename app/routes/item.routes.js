module.exports = app => {
    const { createAluno, createProfessor, findOneAluno, findOneProfessor, updateAluno, updateProfessor, deleteAluno, deleteProfessor, deleteAllAluno, deleteAllProfessor, findAllFlammablesAluno, findAllFlammablesProfessor } = require("../controllers/item.controller");
    var router = require("express").Router();

    router.post("/aluno", createAluno);
    router.post("/professor", createProfessor);

    router.get("/aluno/:id", findOneAluno);
    router.get("/professor/:id", findOneProfessor);

    router.put("/aluno/:id", updateAluno);
    router.put("/professor/:id", updateProfessor);

    router.delete("/aluno/:id", deleteAluno);
    router.delete("/professor/:id", deleteProfessor);

    router.delete("/aluno", deleteAllAluno);
    router.delete("/professor", deleteAllProfessor);

    router.get("/aluno/flammables", findAllFlammablesAluno);
    router.get("/professor/flammables", findAllFlammablesProfessor);

    app.use('/api/item', router);
};

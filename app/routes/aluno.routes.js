module.exports = app => {
    const Aluno = require("../controllers/aluno.controller");

    var router = require("express").Router();

    router.post("/", Aluno.create);

    router.get("/", Aluno.findAll);

    router.get("/Flammabless", Aluno.findAllFlammables);

    router.get("/:id", Aluno.findOne);

    router.put("/:id", Aluno.update);

    router.delete("/:id", Aluno.delete);

    router.delete("/", Aluno.deleteAll);

    app.use('/api/aluno', router);
    
};
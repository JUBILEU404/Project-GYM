module.exports = app => {
    const Exercicio = require("../controllers/exercicio.controller");

    var router = require("express").Router();

    router.post("/", Exercicio.create);

    router.get("/", Exercicio.findAll);



    router.get("/:id", Exercicio.findOne);

    router.put("/:id", Exercicio.update);

    router.delete("/:id", Exercicio.delete);

    router.delete("/", Exercicio.deleteAll);

    app.use('/api/exercicio', router);
    
};
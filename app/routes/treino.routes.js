module.exports = app => {
    const Treino = require("../controllers/treino.controller");

    var router = require("express").Router();

    router.post("/", Treino.create);

    router.get("/", Treino.findAll);

    router.get("/Flammabless", Treino.findAllFlammables);

    router.get("/:id", Treino.findOne);

    router.put("/:id", Treino.update);

    router.delete("/:id", Treino.delete);

    router.delete("/", Treino.deleteAll);

    app.use('/api/treino', router);
    
};
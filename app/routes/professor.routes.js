module.exports = app => {
    const Profesor = require("../controllers/professor.controller");

    var router = require("express").Router();

    router.post("/", Profesor.create);

    router.get("/", Profesor.findAll);

    router.get("/Flammabless", Profesor.findAllFlammables);

    router.get("/:id", Profesor.findOne);

    router.put("/:id", Profesor.update);

    router.delete("/:id", Profesor.delete);

    router.delete("/", Profesor.deleteAll);

    app.use('/api/professor', router);
    
};
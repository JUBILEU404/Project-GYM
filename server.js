const express = require("express");
const cors = require("cors");
const app = express();


var corsOptions = {

     origin: "http://localhost:8081"


};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.Sequelize.sync()
 .then(() => {
    console.log("banco conectado!")
 })
 .catch((err) =>{
    console.log("Falha ao acessar banco de dados: "+ err.message)
 });

 require("./app/routes/aluno.routes")(app);
 require("./app/routes/professor.routes")(app);

app.get("/" , (req,res) => { 
    res.json({nessage: 'Hello World!!' })

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}.`);

});
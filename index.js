const express = require("express");

const cors = require("cors");
const usuarios = require("./routes/usuarios.routes");
const db = require("./db/database");
const app = express();
const port = process.env.PORT || 6000;

db.authenticate()
  .then(() => {
    console.log("conectado a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

db.sync()
  .then(() => console.log("Database Synced"))
  .catch((err) => console.log(err));

app.use(express.json()); //recibir informacion
app.use(cors()); // habilitar  otras aplicaiones para realizar solicitudes a nuestra app
app.use("/usuario", usuarios);

app.listen(process.env.PORT, () => {
  console.log("servidor arrancando ", process.env.PORT);
});

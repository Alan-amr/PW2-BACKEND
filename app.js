require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {dbConnectMy} = require('./config/mysql');
const app = express();
require("sequelize")

app.use(cors());
app.use(express.json());
app.use(express.static("Storage"));
app.use(express.static("Storage-Portada"));
app.use(express.static("Storage-perfil"));

const port = process.env.PORT || 3001;

/**
 * Aqui invocamos a las rutas
 */
app.use("/api",require("./routes"));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnectMy();
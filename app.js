require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {dbConnectMy} = require('./config/mysql');
const app = express();
require("sequelize")

app.use(cors());
const port = process.env.PORT || 3000;

/**
 * Aqui invocamos a las rutas
 */
app.use("/api",require("./routes"));

dbConnectMy();
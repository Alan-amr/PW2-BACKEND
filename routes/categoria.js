const express = require("express");
//require("sequelize") = require("../validators/usuario")
const { getItems} = require("../controllers/categoria");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getItems);

module.exports=router
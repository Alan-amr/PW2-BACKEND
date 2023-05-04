const express = require("express");
require("sequelize")
const { getItems} = require("../controllers/calificacion");
const router=express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getItems)

module.exports=router
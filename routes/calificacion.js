const express = require("express");
require("sequelize")
const { createItem, updateItem} = require("../controllers/calificacion");
const router=express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.post("/",createItem);
router.put("/:id", updateItem)

module.exports=router
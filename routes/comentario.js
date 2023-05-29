const express = require("express");
//require("sequelize") = require("../validators/usuario")
const { createItem, updateItem, getItems} = require("../controllers/comentario");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getItems);
router.post("/",createItem);
router.put("/:id",updateItem);

module.exports=router
const express = require("express");
const { getItems, getItem, addlista, createItem, updateItem} = require("../controllers/lista");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/usuario/:id",getItems);
router.get("/:id",getItem);
router.post("/",createItem);
router.post("/add/",addlista);
router.put("/:id",updateItem);

module.exports=router
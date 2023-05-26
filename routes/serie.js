const express = require("express");
require("sequelize")
const {validatorSerie} = require("./../validators/serie");
const { getAll,getItem,searchItem,searchBcateg,createItem,updateItem } = require("../controllers/serie");
const router = express.Router();
const {uploadMiddlewarePortadaImg} = require("./../utils/middleware/storage");

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getAll);
router.get("/:id",getItem);
router.get("/search/:search",searchItem);
router.get("/categ/:cat",searchBcateg);
router.post("/",uploadMiddlewarePortadaImg.single("portada"),createItem);
router.put("/:id",uploadMiddlewarePortadaImg.single("portada"),updateItem);

module.exports=router
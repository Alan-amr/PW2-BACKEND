const express = require("express");
require("sequelize");
const {validatorFile} = require("../validators/escrito")
const {uploadMiddlewareDoc} = require("../utils/middleware/storage")
const { getItem, createItem, updateItem } = require("../controllers/escrito");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

//router.get("/:serie",getItems);
router.get("/:id",getItem);
router.post("/",validatorFile,uploadMiddlewareDoc.single("doc"), createItem)
router.put("/:id",updateItem);

module.exports=router
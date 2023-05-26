const express = require("express");
require("sequelize")
const {validatorCreateUsuario, validatorLogin, validatorUpdateUsuario} = require("../validators/usuario")
const { getAllUsers, getUser, login, createUser, UpdateUser} = require("../controllers/usuario");
const router = express.Router();
const {uploadMiddlewareUserImg} = require("./../utils/middleware/storage");

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getAllUsers);
router.get("/:id",getUser);
router.get("/:email/:password",validatorLogin,login);
router.post("/",uploadMiddlewareUserImg.single("imagen"),createUser);
router.put("/:id",uploadMiddlewareUserImg.single("imagen"),UpdateUser);

module.exports=router
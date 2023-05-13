const express = require("express");
require("sequelize")
const {validatorCreateUsuario, validatorLogin, validatorUpdateUsuario} = require("../validators/usuario")
const { getAllUsers, getUser, login, createUser, UpdateUser, DeleteUser} = require("../controllers/usuario");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

router.get("/",getAllUsers);
router.get("/:id",getUser);
router.get("/:email/:password",validatorLogin,login);
router.post("/",validatorCreateUsuario,createUser);
router.put("/:id",validatorUpdateUsuario,UpdateUser);

module.exports=router
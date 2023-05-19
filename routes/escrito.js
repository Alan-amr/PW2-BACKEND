const express = require("express");
require("sequelize");
const {upload} = require("../utils/middleware/storage")
const { getItems, getItem, createItem, updateItem } = require("../controllers/escrito");
const router = express.Router();

const multer = require("multer");
/// cb callback
// storage es un midleware
const storageUser = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../Storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const uploadMiddlewareUserImg = multer({
  storage:storageUser});


//TODO http://localhost/calificacion GET,POST,DELETE,PUT

//router.get("/:serie",getItems);
router.get("/:id",getItem);
router.post("/",uploadMiddlewareUserImg.single("myfile"), createItem)
router.put("/:id",updateItem);

module.exports=router
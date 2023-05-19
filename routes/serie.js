const express = require("express");
require("sequelize")
const { getAll,getItem,searchItem,searchBcateg,createItem,updateItem } = require("../controllers/serie");
const router = express.Router();

//TODO http://localhost/calificacion GET,POST,DELETE,PUT

const multer = require("multer");
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

router.get("/",getAll);
router.get("/:id",getItem);
router.get("search/:search",searchItem);
router.get("categ/:cat",searchBcateg);
router.post("/",createItem);
router.put("/:id",updateItem);

module.exports=router
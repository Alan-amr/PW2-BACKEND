const multer = require("multer");
/// cb callback
// storage es un midleware
const storageFile = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../../Storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const uploadMiddlewareDoc = multer({
  storage:storageFile});
  
const StorageImg = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../../Storage-perfil`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const uploadMiddlewareUserImg = multer({
  storage:StorageImg});

  const StoragePortada = multer.diskStorage({
    destination: function(req,file,cb){
       const pathStorage = `${__dirname}/../../Storage-Portada`;
       cb(null, pathStorage);
    },
    filename: function(req, file, cb) {
      const ext = file.originalname.split(".").pop();
      const filename = `file-${Date.now()}.${ext}`;
      cb(null, filename)
    }
  });
  
  const uploadMiddlewarePortadaImg = multer({
    storage:StoragePortada});


module.exports = {uploadMiddlewareDoc, uploadMiddlewareUserImg, uploadMiddlewarePortadaImg}
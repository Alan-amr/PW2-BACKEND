const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../Storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) { 
    console.log(file);
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
    console.log(file);
    console.log(filename);
  }
});

const upload = multer({ storage: storage })
  
module.exports = {upload}
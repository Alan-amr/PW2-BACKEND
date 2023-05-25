const {check, validationResult} = require("express-validator");

const validatorFile = [
    check("titulo")
    .exists()
    .notEmpty(),
    check("serie")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("file")
    .exists()
    .notEmpty(),
    (req, res, next)=>{
        try {
            validationResult(req).throw();
            return next();//si todo fue bien entra next
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});            
        }
    }
];

module.exports = {validatorFile};
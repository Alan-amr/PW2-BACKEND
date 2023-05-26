const {check, body, validationResult} = require("express-validator");

const validatorFile = [
    body("titulo")
    .exists()
    .notEmpty()
    .isString(),
    body("serie")
    .exists()
    .notEmpty()
    .isNumeric(),
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
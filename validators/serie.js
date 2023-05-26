const {check,body, validationResult} = require("express-validator");

const validatorSerie = [
    body("titulo")
    .exists()
    .notEmpty()
    .isString(),
    body("sinopsis")
    .exists()
    .notEmpty()
    .isString(),
    body("autor")
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
module.exports = {validatorSerie};
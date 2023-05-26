const {check, validationResult} = require("express-validator");

const validatorSerie = [
    check("titulo")
    .exists()
    .notEmpty()
    .isString(),
    check("sinopsis")
    .exists()
    .notEmpty()
    .isString(),
    check("autor")
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
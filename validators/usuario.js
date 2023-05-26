const {check,body, validationResult} = require("express-validator");

const validatorCreateUsuario = [
    body("nombre")
    .exists()
    .notEmpty(),
    body("email")
    .exists()
    .notEmpty()
    .isEmail(),
    body("password")
    .exists()
    .notEmpty()
    .isAlphanumeric(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();//si todo fue bien entra next
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});            
        }
    }
];

const validatorLogin = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isAlphanumeric(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();//si todo fue bien entra next
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});            
        }
    }
];

const validatorUpdateUsuario = [
    check("id")
    .exists()
    .notEmpty()
    .isNumeric(),
    body("nombre")
    .exists()
    .notEmpty(),
    body("email")
    .exists()
    .notEmpty()
    .isEmail(),
    body("password")
    .exists()
    .notEmpty()
    .isAlphanumeric(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();//si todo fue bien entra next
        } catch (error) {
            res.status(403);
            res.send({errors: error.array()});            
        }
    }
]

module.exports = {validatorCreateUsuario, validatorLogin,validatorUpdateUsuario};
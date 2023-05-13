const {check, validationResult} = require("express-validator");

const validatorCreateUsuario = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
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
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
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
    .notEmpty(),
    check("nombre")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty(),
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
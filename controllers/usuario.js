const { usuarioModel } = require("../models");
const { matchedData } = require('express-validator');

const getAllUsers = async (req,res)=> {
    try {
        const data= await usuarioModel.findAll({});
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}
const getUser = async (req,res)=> {
    try {
        matchedData(req);
        const data = await usuarioModel.findByPk(req.params.id);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
const createUser = async (req,res)=> {
    try {
        const {body} = req;
        const data = await usuarioModel.create(body);
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
const login = async (req,res)=> {
    try {
        const email = req.params.email;
        const password = req.params.password;
        const data = await usuarioModel.findOne({ where: { email: email , password : password}})
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
const UpdateUser = async (req,res)=> {
    try {
        matchedData(req);
        const data = await usuarioModel.update(req.body,
            { where: {id: req.params.id}});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}


module.exports={getAllUsers,getUser,createUser,login,UpdateUser,DeleteUser};
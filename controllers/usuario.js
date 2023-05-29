const { usuarioModel, seriesModel, listasModel } = require("../models");
const { matchedData } = require('express-validator');
const session = require("express-session");

const getAllUsers = async (req,res)=> {
    try {
        const data= await usuarioModel.findAll({});
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}
const getUser = async (req,res)=> {
    try {
        const id = req.params.id;
        matchedData(req);
        const data = await usuarioModel.findOne({
            include:[{
                model:seriesModel,
                as: 'series'
            },
            {
                model: listasModel,
                as: 'listas'
            }],
            where:{id: id}
        });
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
const createUser = async (req,res)=> {
    try {
        const nombre = req.body.nombre;
        const email = req.body.email;
        const password = req.body.password;
        const imagen = req.file.filename;
        const data = await usuarioModel.create({
                nombre: nombre,
                email: email,
                password: password,
                imagen: imagen
            });
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
const login = async (req,res)=> {
    try {
        const email = req.params.email;
        const password = req.params.password;
        const data = await usuarioModel.findOne({ where: { email: email , password : password}})
        if (data != null) { 
            req.session.usuarioId = data.id;
        }
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


module.exports={getAllUsers,getUser,createUser,login,UpdateUser};
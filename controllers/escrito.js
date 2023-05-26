const { escritoModel } = require("../models");
const { matchedData } = require('express-validator');

const getItems = async (req,res)=> {
    try {
        const serie = req.params.serie;
        console.log(serie);
        const data= await escritoModel.findAll({where:{ serie: serie}})
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}
const getItem = async (req,res)=> {
    try {
        const id = req.params.id;
        const data= await escritoModel.findOne({where:{ id: id}})
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}
const createItem = async (req,res)=> {
    try {
        const titulo = req.body.titulo;
        const serie = req.body.serie;
        const content = req.file.filename;
        const data = await escritoModel.create({
            titulo: titulo, 
            serie: serie, 
            content: content
        });
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}
const updateItem = (req,res)=> {}
const deleteItem = (req,res)=> {}


module.exports={getItems,getItem,createItem,updateItem,deleteItem}
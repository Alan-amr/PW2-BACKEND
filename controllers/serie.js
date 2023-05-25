const { seriesModel,escritoModel } = require("../models")
const {Op} = require("sequelize");

const getAll = async (req,res)=> {
    const data= await seriesModel.findAll({})
    res.send({data})
}
const getItem = async (req,res)=> {
    const id = req.params.id;
    const data= await seriesModel.findOne({
        include:{
            model:escritoModel,
            as: 'escritos'
        },
        where:{id: id}
    })
    res.send({data})
}
const searchItem = async (req,res)=> {
    const search = '%'+req.params.search+'%';
    //const search = req.params.search;
    const data= await seriesModel.findAll({
        where: {titulo: {[Op.like]: search}}
    })
    res.send({data});
}
const searchBcateg = async (req,res)=> {
    
}
const createItem = async (req,res)=> {
    try {
        const titulo = req.body.titulo;
        const autor = req.body.autor;
        const sinopsis = req.body.sinopsis;
        const portada = req.file.filename;
        const data = await seriesModel.create({
            titulo: titulo, 
            autor: autor, 
            sinopsis: sinopsis,
            portada: portada});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}
const updateItem = async (req,res)=> {
    try {
        matchedData(req);
        const data = await seriesModel.update(req.body,
            { where: {id: req.params.id}});
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}


module.exports={getAll,getItem,searchItem,searchBcateg,createItem,updateItem}
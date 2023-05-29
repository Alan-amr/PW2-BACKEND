const { sequelize } = require("../config/mysql");
const { seriesModel,escritoModel, categoria_serieModel, categoriaModel, calificacionModel } = require("../models")
const {Op, where} = require("sequelize");

const getAll = async (req,res)=> {
    const data= await seriesModel.findAll({})
    res.send(data)
}
const getItem = async (req,res)=> {
    try {
        const id = req.params.id;
        const data= await seriesModel.findOne({
            attributes: [
                'id',
                'titulo',
                'sinopsis',
                'portada',
                [sequelize.fn('COUNT', sequelize.col('calificaciones.id')), 'totalCalificaciones'],
                [sequelize.fn('SUM', sequelize.col('calificaciones.valor')), 'sumaCalificaciones'],
                [sequelize.fn('AVG', sequelize.col('calificaciones.valor')), 'promedioCalificaciones'],
              ],
              include: [
                {
                  model: calificacionModel,
                  as: 'calificaciones',
                  attributes: []
                },
                {
                model:escritoModel,
                as: 'escritos'
            }],
            where:{id: id},
        })
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
const searchItem = async (req,res)=> {
    const search = '%'+req.params.search+'%';
    const data= await seriesModel.findAll({
        where: {titulo: {[Op.like]: search}}
    })
    res.send(data);
}
const searchBcateg = async (req,res)=> {
    try {
        const categoria = req.params.cat;
        const data= await categoriaModel.findOne({
            include:[{
                model: seriesModel,
                through:{
                    model: categoria_serieModel,
                    where:{categoria: categoria}
                }
            }],
            where:{id: categoria}
        })
        console.log(data);
        res.send(data)
    } catch (error) {
        res.send(error);
    }
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
            portada: portada
        });
        res.send(data);
        let cat = req.body.categorias
        cat = JSON.parse(cat)
        console.log(cat)
        cat.forEach(element => {
            createRelacion_seriecategoria(element.id, data.id);
        });
        
    } catch (error) {
        res.send(error)
    }
}

async function createRelacion_seriecategoria(categoria, serie){
    console.log(categoria);
    const data = await categoria_serieModel.create({
        categoria: categoria,
        serie: serie,
        serieId: serie,
        categoriumId: categoria
    })
    return data;
}

const updateItem = async (req,res)=> {
    try {
        matchedData(req);
        const data = await seriesModel.update(req.body,
            { where: {id: req.params.id}});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


module.exports={getAll,getItem,searchItem,searchBcateg,createItem,updateItem}
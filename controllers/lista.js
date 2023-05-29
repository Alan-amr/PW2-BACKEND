const { listasModel, series_lista, seriesModel } = require("../models")

const getItems = async (req,res)=> {
    const creador = req.param.creador;
    const data= await listasModel.findAll({
        where:{
            creador: creador
        }
    })
    res.send(data)
}
const getItem = async (req,res)=> {
    try {
        const id = req.params.id;
        const data= await listasModel.findOne({
            include:{
                model:seriesModel,
                through:{
                    model: series_lista,
                    where:{lista: id}
                }
            },
            where:{id: id}
        })
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
const createItem = async (req,res)=> {
    try {
        const {body} = req;
        const data = await listasModel.create(body);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
const addlista = async(req,res)=> {
    try {
        const lista = req.body.lista;
        const serie = req.body.serie;
        console.log(lista);
        console.log(serie);
        const data = await series_lista.create({
            lista: lista,
            serie: serie,
            listaId: lista,
            serieId: serie
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
const updateItem = async (req,res)=> {
    try {
        matchedData(req);
        const data = await listasModel.update(req.body,
            { where: {id: req.params.id}});
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}
const deleteItem = (req,res)=> {}


module.exports={getItems,getItem,createItem, addlista,updateItem,deleteItem}
const { calificacionModel } = require("../models")

const getItems = async (req,res)=> {
    /*const data= await calificacionModel.findAll({})
    res.send({data})*/
    const data = ["hola","mundo"];

    res.send({data});
}
const getItem = (req,res)=> {

}
const createItem = (req,res)=> {}
const updateItem = (req,res)=> {}
const deleteItem = (req,res)=> {}


module.exports={getItems,getItem,createItem,updateItem,deleteItem}


const { categoria_serieModel } = require("../models")

const getItems = async (req,res)=> {
    const data= await categoria_serieModel.findAll({})
    res.send({data})
}
const getItem = (req,res)=> {}
const createItem = (req,res)=> {}
const updateItem = (req,res)=> {}
const deleteItem = (req,res)=> {}


module.exports={getItems,getItem,createItem,updateItem,deleteItem}

const { seriesModel } = require("../models")

const getAll = async (req,res)=> {
    const data= await seriesModel.findAll({})
    res.send({data})
}
const getItem = async (req,res)=> {
    const data= await seriesModel.findAll({})
    res.send({data})
}
const searchItem = async (req,res)=> {}
const searchBcateg = async (req,res)=> {}
const createItem = async (req,res)=> {}
const updateItem = async (req,res)=> {}


module.exports={getAll,getItem,searchItem,searchBcateg,createItem,updateItem}
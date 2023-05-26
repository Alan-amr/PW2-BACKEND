const { comentarioModel } = require("../models")

const getAll = async (req,res)=> {
    const data= await comentarioModel.findAll({})
    res.send({data})
}
const getItem = (req,res)=> {}
const createItem = async (req,res)=> {
    try {
        const body = req.body
        const data = await comentarioModel.create(body)
        res.data(data);
    } catch (error) {
        res.data(error);
    }
}
const updateItem = async (req,res)=> {
    try {
        const body = req.body;
        const data = await comentarioModel.update(body,{
            where: {
                id: req.params.id
            }
        })
        res.data(data);
    } catch (error) {
        res.data(error);
        console.log(error);
    }
}
const deleteItem = (req,res)=> {}


module.exports={getItems,getItem,createItem,updateItem,deleteItem}
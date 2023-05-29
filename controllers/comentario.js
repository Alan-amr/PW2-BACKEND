const { comentarioModel } = require("../models")

const getItems = async (req,res)=> {
    const data= await comentarioModel.findAll({})
    res.send(data)
}
const getItem = (req,res)=> {}
const createItem = async (req,res)=> {
    try {
        const content = req.body.content;
        const autor = req.body.autor;
        const escrito = req.body.escrito;
        console.log(req);
        const data = await comentarioModel.create({
            content: content,
            autor: autor,
            escrito: escrito
        })
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
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
        res.send(data);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}
const deleteItem = (req,res)=> {}


module.exports={createItem,updateItem,getItems}
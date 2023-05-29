const { calificacionModel } = require("../models")

const createItem = async (req,res)=> {
    try {
        const {body} = req
        const data = await calificacionModel.create(body)
        res.send(data)
    } catch (error) {
        res.send(error);
    }
}
const updateItem = async (req,res)=> {
    try {
        matchedData(req);
        const data = await calificacionModel.update(req.body,
            { where: {id: req.params.id}});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
const deleteItem = (req,res)=> {}


module.exports={createItem,updateItem,deleteItem}


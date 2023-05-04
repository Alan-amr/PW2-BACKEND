const { log } = require("console")
const express=require("express")
const fs=require("fs")
const router=express.Router()
require("sequelize")

const PATH_ROUTES = __dirname

const removeExtension = (fileName)=>{
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    console.log(file);
    const name= removeExtension(file)
    if(name!=='index'){
        console.log(`Cargando Ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`))
    }
})


module.exports=router
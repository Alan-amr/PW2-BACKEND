const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Categoria = sequelize.define(
    "categoria",
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        createdAt:{
            type: DataTypes.TIME
        },
        updatedAt:{
            type: DataTypes.TIME
        }
    },
);
module.exports=Categoria;
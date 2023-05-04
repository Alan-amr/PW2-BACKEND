const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Escrito = sequelize.define(
    "escrito",
    {
        titulo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        serie:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        content:{
            type: DataTypes.BLOB,
            allowNull: false,
        }
    },
);
module.exports=Escrito;
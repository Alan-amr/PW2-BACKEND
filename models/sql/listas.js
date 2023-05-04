const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Lista = sequelize.define(
    "lista",
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
        creador:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        }
    },
);
module.exports=Lista;
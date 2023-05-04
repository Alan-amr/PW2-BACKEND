const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Comentario = sequelize.define(
    "comentario",
    {
        content:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        autor:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        escrito:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        }
    },
);
module.exports=Comentario;
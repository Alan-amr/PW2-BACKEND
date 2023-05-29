const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");
const Escrito = require("./escritos");

const Comentario = sequelize.define(
    "comentarios",
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
        },
        createdAt:{
            type: DataTypes.TIME
        },
        updatedAt:{
            type: DataTypes.TIME
        }
    },
);

Escrito.hasMany(Comentario, {as: 'comentarios', foreignKey: 'escrito'})

module.exports=Comentario;
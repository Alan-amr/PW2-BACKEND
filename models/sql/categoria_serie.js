const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Categoria_Serie = sequelize.define(
    "categoria_serie",
    {
        serie:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            foreignKey: true
        },
        categoria:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            foreignkey:true
        },
        createdAt:{
            type: DataTypes.TIME
        },
        updatedAt:{
            type: DataTypes.TIME
        }
    },
);
module.exports=Categoria_Serie;
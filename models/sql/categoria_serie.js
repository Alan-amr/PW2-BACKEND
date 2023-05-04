const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Categoria_Serie = sequelize.define(
    "categoria_serie",
    {
        serie:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        categoria:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        }
    },
);
module.exports=Categoria_Serie;
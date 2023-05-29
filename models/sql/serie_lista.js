const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const serie_lista = sequelize.define(
    "serie_lista",
    {
        serie:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        lista:{
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
module.exports=serie_lista;
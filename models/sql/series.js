const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");

const Serie = sequelize.define(
    "serie",
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
        autor:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        portada:{
            type: DataTypes.BLOB
        }
    },
);
module.exports=Serie;
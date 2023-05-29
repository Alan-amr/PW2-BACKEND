const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");
const Lista = require("./listas");

const Usuario = sequelize.define(
    "usuario",
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        },
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        imagen:{
            type: DataTypes.STRING,
        },
        createdAt:{
            type: DataTypes.TIME
        },
        updatedAt:{
            type: DataTypes.TIME
        }
    },
);

Usuario.hasMany(Lista, {as: 'listas', foreignKey: 'creador'});

module.exports=Usuario;
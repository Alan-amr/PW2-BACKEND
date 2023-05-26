const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize");
const Escrito = require("./escritos");
const categoria_serie = require("./categoria_serie");
const categoria = require("./categoria");
const Serie_lista = require("./serie_lista");
const Lista = require("./listas");
const Usuario = require("./usuario");
const calificacion = require("./calificacion");

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
        sinopsis:{
            type: DataTypes.STRING,
            allowNull: false
        },  
        portada:{
            type: DataTypes.BLOB
        },
        createdAt:{
            type: DataTypes.TIME
        },
        updatedAt:{
            type: DataTypes.TIME
        }
    },
);

Serie.hasMany(Escrito, {as: 'escritos', foreignKey: 'serie'});

Usuario.hasMany(Serie, {as: 'series', foreignKey:'autor'});

Serie.belongsToMany(categoria, {through: categoria_serie});
categoria.belongsToMany(Serie, {through: categoria_serie});

Serie.belongsToMany(Lista, {through: Serie_lista});
Lista.belongsToMany(Serie, {through: Serie_lista});

Serie.hasMany(calificacion, {as: 'calificaciones', foreignKey:'serie'})
Usuario.hasMany(calificacion, {as: 'calificaciones', foreignKey: 'autor'})

module.exports=Serie;
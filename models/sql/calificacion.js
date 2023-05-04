const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize")

const Calificacion = sequelize.define(
    "Calificacion",
    {
        valor:{
            type: DataTypes.INTEGER,
        },
        serie:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
        autor:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports=Calificacion;
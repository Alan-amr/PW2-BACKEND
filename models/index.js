require("sequelize")
const models ={
    calificacionModel: require('./sql/calificacion'),
    categoria_serieModel: require('./sql/categoria_serie'),
    categoriaModel: require('./sql/categoria'),
    comentarioModel: require('./sql/comentario'),
    escritoModel: require('./sql/escritos'),
    listasModel: require('./sql/listas'),
    seriesModel: require('./sql/series'),
    usuariosModel: require('./sql/usuarios')

}

module.exports=models
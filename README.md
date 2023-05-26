# PW2-BACKEND

Las rutas utilies son 
Usuarios:
-GETALL: http://localhost:3000/api/usuario/ #Se trae a todos los usuarios
-GETONEhttp://localhost:3000/api/usuario/:id #Se trae el usuario con todo y sus series
-POST: http://localhost:3000/api/usuario/ #EL json es 
{
    nombre: String
    email: String
    password: String
    imagen: File
}
-LOGIN: http://localhost:3000/api/usuario/:email/:password #en email y password poner los datos respectivos en la URL

Los Escritos
-POST: http://localhost:3000/api/escrito/ #El json es
{
    titulo: String
    serie: bigint
    doc: file
}
-GET: http://localhost:3000/api/escrito/:id
-PUT: http://localhost:3000/api/escrito/:id
{
    titulo: String
    serie: bigint
    doc: file
}

LAS SERIES
GETALL: http://localhost:3000/api/serie/ #Te trae todas las series existentes
GETONE: http://localhost:3000/api/serie/:id #Te trae una serie con sus escritos relacionados
POST: http://localhost:3000/api/serie/ #El json debe ser
{
    titulo: String
    autor: bigint
    sinopsis: String
    portada: File
}

 BackEnd

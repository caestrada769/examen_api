require('dotenv').config() //Importar paquete dotenv
const { Server } = require('./models/server') //Si en el archivo server hago el exports con llaves aca tambien se llama con llaves

const server = new Server() //Instanciar el objeto 

server.listen()


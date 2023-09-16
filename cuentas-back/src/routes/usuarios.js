const express = require('express');
const usuariosController =require('../controllers/usuario');


const usuariosRouter = express.Router();

usuariosRouter.get('/usuario/:id', usuariosController.obtenerUsuario); // Nivel 2: token
usuariosRouter.post('/usuario', usuariosController.crearUsuario);  // Nivel 0: publico
usuariosRouter.put('/usuario/:id', usuariosController.actualizarUsuario); // Nivel 2: Token
usuariosRouter.delete('/usuario/:id', usuariosController.borrarUsuario); //Nivel  2: Token

usuariosRouter.get('/usuario/:id/token', usuariosController.obtenerTokenActual); //Nivel  1: Usuario
usuariosRouter.post('/usuario/:id/token', usuariosController.crearNuevoToken);  //Nivel  1: Usuario
usuariosRouter.put('/usuario/:id/token', usuariosController.modificarToken);  //Nivel  1: Usuario
usuariosRouter.delete('/usuario/:id/token', usuariosController.borrarToken);  //Nivel  1: Usuario

module.exports = usuariosRouter;
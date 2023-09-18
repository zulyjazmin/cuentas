// RUTAS NIVEL 1

const express = require('express');
const protectedRoutes = express.Router();

const usuariosController = require('../controllers/usuarios.controller')
const levelOneMiddleware = require('../middlewares/levelOne.middleware');

protectedRoutes.use(levelOneMiddleware);

protectedRoutes.get('/usuario/:id/token', usuariosController.obtenerTokenActual); 
protectedRoutes.post('/usuario/:id/token', usuariosController.crearNuevoToken); 
protectedRoutes.put('/usuario/:id/token', usuariosController.modificarToken);
protectedRoutes.delete('/usuario/:id/token', usuariosController.borrarToken);

module.exports = protectedRoutes;
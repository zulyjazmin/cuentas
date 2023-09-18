// Rutas Nivel 2
const express = require('express');

const privateRoutes = express.Router();

const cuentasController = require('../controllers/cuentas.controller');
const usuariosController =require('../controllers/usuarios.controller');
const levelTwoMiddlware = require('../middlewares/levelTwo.middleware');

privateRoutes.use(levelTwoMiddlware);

privateRoutes.get('/cuenta', cuentasController.obtenerCatalogo)  
privateRoutes.delete('/cuenta/:id', cuentasController.borrarCuenta) 
privateRoutes.delete('/cuenta/:id', cuentasController.borrarCuenta)

privateRoutes.get('/usuario/:id', usuariosController.obtenerUsuario); 
privateRoutes.put('/usuario/:id', usuariosController.actualizarUsuario);
privateRoutes.delete('/usuario/:id', usuariosController.borrarUsuario);

module.exports = privateRoutes;
const express = require('express');
const cuentasController = require('../controllers/cuentas');

const cuentasRouter = express.Router();

cuentasRouter.get('/cuenta', cuentasController.obtenerCatalogo)  // Nivel 2: Token
cuentasRouter.post('/cuenta', cuentasController.crearCuenta)  // Nivel 2: Token
cuentasRouter.delete('/cuenta/:id', cuentasController.borrarCuenta)  // Nivel 2: Token

module.exports = cuentasRouter;

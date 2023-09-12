const express = require('express');
const cuentasController = require('../controllers/cuentas');

const cuentasRouter = express.Router();

cuentasRouter.get('/cuenta/inicial', cuentasController.obtenerCatalogoInicial)
cuentasRouter.post('/cuenta', cuentasController.crearCuenta)
cuentasRouter.delete('/cuenta/:id', cuentasController.borrarCuenta)

module.exports = cuentasRouter;

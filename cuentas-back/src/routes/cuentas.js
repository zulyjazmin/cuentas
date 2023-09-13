const express = require('express');
const cuentasController = require('../controllers/cuentas');

const cuentasRouter = express.Router();

cuentasRouter.get('/cuenta', cuentasController.obtenerCatalogo)
cuentasRouter.post('/cuenta', cuentasController.crearCuenta)
cuentasRouter.delete('/cuenta/:id', cuentasController.borrarCuenta)

module.exports = cuentasRouter;

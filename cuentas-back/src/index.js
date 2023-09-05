const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const cuentasService = {
   async obtenerCatalogoInicial(req, res) {
    res.json([
        { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
        { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD' }
        
      ])
   },
   async crearCuenta(req, res) {
   res.json( [
        { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
        { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD' },
        { numero: '020101', nombre: 'Cuentas por pagar', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' }
    ])
    
   },
   
   async borrarCuenta(req, res) {
    res.json([
        { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' }
    ])
   },
}

app.get('/cuenta/inicial', cuentasService.obtenerCatalogoInicial)
app.get('/cuenta', cuentasService.obtenerCatalogo)
app.post('/cuenta', cuentasService.crearCuenta)
app.delete('/cuenta/:id', cuentasService.borrarCuenta)

app.listen(5000, () =>
console.log('Servidor ejecutandose en http://localhost:5000'))
const cuentasController = {
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

 module.exports = cuentasController;
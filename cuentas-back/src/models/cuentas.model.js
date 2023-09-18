const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'numero': String,
    'nombre':String,
    'rubro': String,
    'subrubro': String,
    'deposito': String,
    'moneda':String
});

const cuentasModel = mongoose.model('Cuentas', schema, 'cuentas');

module.exports = cuentasModel;
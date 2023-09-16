const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'nombre': String,
    'email':String,
    'usuario': String,
    'deposito': String,
    'clave':String
});

const usuariosModel = mongoose.model('Usuarios', schema, 'usuarios');

module.exports = usuariosModel;
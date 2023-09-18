const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'nombre': String,
    'email':String,
    'usuario': String,
    'deposito': String,
    'clave':String,
    'token': String,
    'token_expires': Date
});

const usuariosModel = mongoose.model('Usuarios', schema, 'usuarios');

module.exports = usuariosModel;
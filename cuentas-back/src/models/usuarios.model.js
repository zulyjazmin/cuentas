const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    'nombre': String,
    'email':String,
    'usuario': String,
    'deposito': String,
    'clave':String,
    'token': String,
    'token_timestamp_ms': Number, 
    'token_expires_ms': Number
});

const usuariosModel = mongoose.model('Usuarios', schema, 'usuarios');

usuariosModel.insertOneWithToken = ({ nombre, email, usuario, clave, token }) =>
{
    usuariosModel.insertMany([
        {
            nombre, 
            email, 
            usuario, 
            clave, 
            token,
            token_timestamp_ms: Date.now(),
            token_expires_ms: (process.env.TOKEN_LIFE_SECS * 1000)

        }
    ]);
}

module.exports = usuariosModel;
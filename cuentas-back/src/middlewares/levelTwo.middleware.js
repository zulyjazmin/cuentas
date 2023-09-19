const usuariosModel = require("../models/usuarios.model");

const levelTwoMiddlware = async (req, res, next) =>
{
    const credenciales = req.headers['x-access-token'];
    const tieneCredenciales = credenciales != undefined;

    let registroToken = await usuariosModel.findOne({ token: credenciales}).exec();


    const diff = Date.now() - registroToken.token_timestamp_ms;
    const tokenValido = diff < registroToken.token_expires_ms;

    if (tieneCredenciales && tokenRegistrado != null && tokenValido)

    {
        next()
    }
    else
    {
        res.status(403).send();
        return;
    }
}

module.exports = levelTwoMiddlware;
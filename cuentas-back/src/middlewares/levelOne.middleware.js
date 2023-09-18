const levelOneMiddleware = async (req, res, next) =>
{
    const credenciales = req.headers['authorization'];
    const tieneCredenciales = credenciales != undefined;
   

   /*  const partesCredenciales = credenciales.split(' ');
    const parUsuarioClave = partesCredenciales[1]
    const partesParUsuarioClave = parUsuarioClave.split( ':' );
    const usuario = partesParUsuarioClave[0];
    const clave = partesParUsuarioClave[1];
 */
    
    const [usuario, clave] = credenciales.split(' ')[1].split(':');


    let usuarioRegistrado = 
       await usuariosModel.findOne({ usuario, clave}).exec() == null;

    if (tieneCredenciales && usuarioRegistrado)

    {
        next()
    }
    {
        res.status(403).send();
        return;
    }
}

module.exports = levelOneMiddleware;
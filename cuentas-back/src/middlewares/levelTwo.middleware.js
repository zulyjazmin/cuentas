const levelTwoMiddlware = (re, res, next) =>
{
    const credenciales = req.headers['x-access-token'];
    const tieneCredenciales = credenciales != undefined;

    let tokenRegistrado = true;

    if (tieneCredenciales && tokenRegistrado)

    {
        next()
    }
    {
        res.status(403).send();
        return;
    }
}

module.exports = levelTwoMiddlware;
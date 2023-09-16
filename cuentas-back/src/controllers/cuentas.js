const cuentasModel = require("../models/cuentas");
    const { throwIfSomeEmpty, throwIfExists, insertInModel, formatAccount} = require("../utils/ops");


const cuentasController = {
    async obtenerCatalogo(req, res) {
        const docs = await cuentasModel.find({}).exec();
        res.json(docs)
    },

     crearCuenta: (req, res) =>
     formatAccount(req.body)
            .then(throwIfSomeEmpty)
            .then(throwIfExists(cuentasModel, {numero: req.body.numero}))
            .then(insertInModel(cuentasModel))
            .then((r) => res.json(r))
      ,
    
    async borrarCuenta(req, res) {
        const numero = req.params.id;
        const result = await cuentasModel.deleteOne({ numero: numero }).exec()
        res.json(result)
    },
 }

 module.exports = cuentasController;
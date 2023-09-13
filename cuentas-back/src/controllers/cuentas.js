const cuentasModel = require("../models/cuentas")

const cuentasController = {
    async obtenerCatalogo(req, res) {


        const docs = await cuentasModel.find({}).exec();
        res.json(docs)
    },

    async crearCuenta(req, res) {


        const data = req.body;

        if (
            data.numero == undefined ||
            data.nombre == undefined ||
            data.rubro == undefined ||
            data.subrubro == undefined ||
            data.deposito == undefined ||
            data.moneda == undefined 
        )

        {
            res.json({
                error: 'Propriedades faltantes'
            });
            return;
        }

        const existingDoc = await cuentasModel.findOne({ numero: data.numero }).exec();

        if (existingDoc != null)
        {
            res.json({
                error: 'El Numero de Cuenta ya existe.'
            });
            return;
        }

           const result = await cuentasModel.insertMany([data])
           res.json(result)
      
    },
    
    async borrarCuenta(req, res) {
        const numero = req.params.id;

        const result = await cuentasModel.deleteOne({ numero: numero }).exec()
     res.json(result)
    },
 }

 module.exports = cuentasController;
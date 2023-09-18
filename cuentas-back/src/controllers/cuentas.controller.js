const cuentasModel = require("../models/cuentas.model");
 

const cuentasController = {};

    cuentasController.obtenerCatalogo = async (req, res) => {
        /// 1) Formateo
        // 2) Validaciones
        // 3) Ejecucuion
        const docs = await cuentasModel.find({}).exec();
        // 4) Salida
        res.json(docs)
    },

     cuentasController.crearCuenta = async (req, res) =>  {
            
        // 1) Formateo
        const cuenta = {
            'numero': req.body.numero,
            'nombre': req.body.nombre,
            'rubro': req.body.rubro,
            'subrubro': req.body.subrubro,
            'deposito': req.body.deposito,
            'moneda': req.body.moneda
        }
        // 2) Validaciones
        // 2.1  No Debe tener Campos Vacios 
       ( Object.values(cuenta).some(x => x === undefined) )
       {
           res.status(400).json({ msj: 'Cuenta mal formateada '});
           return;
       }

       // 2.2 No debe Existir Previamente el Registro
      
       if (await cuentasModel.findOne({numero: req.body.numero}).exec() != null)
       {
        res.status(400).json({ msj: 'Cuenta ya existente '});
           return;
       }

        // 3) Ejecucion
        // 3.1 Insertar El Modelo
        const result = await cuentasModel.insertMany([cuenta]);

        // 4) Envio de respuesta

        res.json(result);
    }
    ,


   cuentasController.borrarCuenta = async (req, res) => {
        // 1) Formateo
        const numero = req.params.id;
        // 2) Validaciones
        // 2.1 La cuenta debe existir
        if (await cuentasModel.findOne({numero: req.body.numero}).exec() == null)
       {
        res.status(400).json({ msj: 'Cuenta ya existente '});
           return;
       }
         // 3) Ejecucuion
          const result = await cuentasModel.deleteOne({ numero: numero}).exec()
          // 4) Salida
          res.json(result)
      
    }
 

 module.exports = cuentasController;
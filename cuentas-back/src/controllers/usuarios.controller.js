const usuariosModel = require("../models/usuarios.model");
const { throwIfSomeEmpty, throwIfExists, insertInModel, formatAccount} = require("../utils/ops");


const usuariosController = {

    async obtenerUsuario(req, res) {
            const id = req.params.id;
            const usuario = usuariosModel.findOne({ _id: id }).exec();
            res.json(usuario);
    },


    crearUsuario: (req, res) =>
    { 
      
            formatAccount(req.body)
                .then(throwIfSomeEmpty)
                .then(throwIfExists(usuariosModel, {email: req.body.email}))
                .then(insertInModel(usuariosModel))
                .then((r) => res.json(r))

         }     
    
     ,
   

    async actualizarUsuario(req, res) {},

    async borrarUsuario(req, res) {},

    async obtenerUsuario(req, res) {},

    async obtenerTokenActual(req, res) {},
    async crearNuevoToken(req, res) {},
    async modificarToken(req, res) {},
    async borrarToken(req, res) {}

}

module.exports = usuariosController;
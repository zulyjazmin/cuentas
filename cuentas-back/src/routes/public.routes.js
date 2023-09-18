const express = require('express');
const usuariosController =require('../controllers/usuarios.controller');


const publicRoutes = express.Router();


publicRoutes.post('/usuario', usuariosController.crearUsuario); 


module.exports = publicRoutes;
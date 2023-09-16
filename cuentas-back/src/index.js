const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cuentasRouter = require('./routes/cuentas');

const fs = require('fs');

const app = express();

app.use((req, res, next) =>
{   
   // 1) Leer permiso Actual
       let permisoActual = 0;
       if (req.headers['x-access-token'] != undefined && tokenExisteEnBBDD()) // TODO
          permisoActual = 2;
       else if (req.headers['authorization'] != undefined && usuarioExisteEnBBDD()) // TODO
          permisoActual = 1;  
           
       // 2) Leer permiso de la ruta
         
       const permisos = JSON.parse(fs.readFileSync('permissions.json'));
       const permisoSolicitado = permisos.find(x => x.method == req.method && x.url == req.url);

       // 3) Compararlos
        if (permisoSolicitado == undefined || permisoSolicitado.minLevel <= permisoActual)
           next()
         else 
              res.status(403).send();
});

app.use(cors());
app.use(express.json());

app.use(cuentasRouter);

mongoose
.connect('mongodb+srv://zuly:sgzgjg156@liquishop.ukypr7d.mongodb.net/contabilidad?retryWrites=true&w=majority')
.then(() =>
   app.listen(5000, () =>
   console.log('Servidor ejecutandose en http://localhost:5000')))


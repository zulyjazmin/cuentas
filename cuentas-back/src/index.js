require('dotenv').config({
   path: '.env.local'
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const publicRoutes = require('./routes/public.routes');
const protectedRoutes = require('./routes/protected.routes');
const privateRoutes = require('./routes/private.routes');


const app = express();

app.use(publicRoutes);
app.use(protectedRoutes);
app.use(privateRoutes)


//app.use(authMiddleWare);
app.use(cors());
app.use(express.json());
app.use(cuentasRouter);

mongoose
.connect(process.env.MONGO_URL)
.then(() =>
   app.listen(process.env.Port, () =>
   console.log('Servidor ejecutandose en http://localhost:'+process.env.PORT)))


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cuentasRouter = require('./routes/cuentas');

const app = express();

app.use(cors());
app.use(express.json());


app.use(cuentasRouter);

mongoose
.connect('mongodb+srv://zuly:sgzgjg156@liquishop.ukypr7d.mongodb.net/contabilidad?retryWrites=true&w=majority')
.then(() =>
   app.listen(5000, () =>
   console.log('Servidor ejecutandose en http://localhost:5000')))


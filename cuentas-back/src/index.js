const express = require('express');
const cors = require('cors');
const cuentasRouter = require('./routes/cuentas');

const app = express();

app.use(cors());
app.use(express.json());


app.use(cuentasRouter);

app.listen(5000, () =>
console.log('Servidor ejecutandose en http://localhost:5000'))
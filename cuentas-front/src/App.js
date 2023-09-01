import React, { useState } from 'react';

//OPERACIOONES


const formatearNumero = (numero) =>
{
  const parts = numero.split('');
  
  let chunk = '';
  let result = '';

  for (const i in parts){
   
    const item = parts[i];

    if (chunk.length < 2){
      chunk += item;
    } else {
      result += chunk + '.'
      chunk = ''
    }
  }
  return result;
}



function App() {

  const [catalogo, setCatalogo] = useState([
    { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
    { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD'  },
    { numero: '020101', nombre: 'Cuentas por pagar', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS'  },
  ])

  const crearCuenta = () =>
{
  const  numero = prompt('Ingrese el numero de la cuenta')
  const  nombre = prompt('Ingrese el nombre de la cuenta')
  const  rubro = prompt('Ingrese el rubro de la cuenta')
  const  subrubro = prompt('Ingrese el subrubro de la cuenta')
  const  deposito = prompt('Ingrese el deposito de la cuenta')
  const  moneda = prompt('Ingrese la moneda de la cuenta')

  const nuevoCatalogo = [...catalogo, {
    numero,
    nombre,
    rubro,
    subrubro,
    deposito,
    moneda
  }]

  setCatalogo(nuevoCatalogo)
}

 const borrarCuenta = (numero) => () =>
{
  const nuevoCatalogo = catalogo.filter(x => x.numero != numero);

  setCatalogo(nuevoCatalogo);
} 


  return (
    <>
     <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Catalogo de Cuentas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={crearCuenta}>Nueva</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <main>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rubro</th>
                <th scope="col">Subrubro</th>
                <th scope="col">Deposito</th>
                <th scope="col">Moneda</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {catalogo
              .sort((a, b) =>
              a.numero < b.numero ? -1 : 1
              )
              .map(x => (
                <tr>
                    <th scope="row">{x.numero}</th>
                    <td>{x.nombre} </td>
                    <td>{x.rubro}</td>
                    <td>{x.subrubro}</td>
                    <td>{x.deposito}</td>
                    <td>{x.moneda}</td>
                    <td>
                      <button className="btn btn-primary">Ver</button>
                      <button className="btn btn-warning">Editar</button>
                      <button className="btn btn-danger" onClick={borrarCuenta(x.numero)}>Borrar</button>
                    </td>
                  </tr>

                  ))}
              
            </tbody>
          </table>
    </main>

    </>
  );
}

export default App;

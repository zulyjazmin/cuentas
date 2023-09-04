import { useState } from 'react';
import NavBar from './navbar/navbar.component';
import Table from './table/table.component';
import { CuentasProvider } from './cuentas.context';


export default function CuentasPage() {

  const [catalogo, setCatalogo] = useState([
    { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
    { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD' },
    { numero: '020101', nombre: 'Cuentas por pagar', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' },
  ])

  const crearCuenta = () => {
    const numero = prompt('Ingrese el numero de la cuenta')
    const nombre = prompt('Ingrese el nombre de la cuenta')
    const rubro = prompt('Ingrese el rubro de la cuenta')
    const subrubro = prompt('Ingrese el subrubro de la cuenta')
    const deposito = prompt('Ingrese el deposito de la cuenta')
    const moneda = prompt('Ingrese la moneda de la cuenta')

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

  const borrarCuenta = (numero) => () => {
    const nuevoCatalogo = catalogo.filter(x => x.numero != numero);

    setCatalogo(nuevoCatalogo);
  }


  return (
    <>
      <CuentasProvider>
        <NavBar crearCuenta={crearCuenta} />
        <Table borrarCuenta={borrarCuenta} />
      </CuentasProvider>
    </>
  );
}



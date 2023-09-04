import React, { useContext } from 'react';
const TableRow = ({ x, borrarCuenta }) => (
    <tr>
        <th scope="row">{x.numero}</th>
        <td>{x.nombre}</td>
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
);

export default TableRow;
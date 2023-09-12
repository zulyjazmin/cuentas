import { useContext } from "react";
import { CuentasContext } from "../cuentas.context";

const TableRow = ({ x}) =>
{ 
    const ctx = useContext(CuentasContext);
    return (
        <tr>
            <th scope="row">{x.numero}</th>
            <td>{x.nombre}</td>
            <td>{x.rubro}</td>
            <td>{x.subrubro}</td>
            <td>{x.deposito}</td>
            <td>{x.moneda}</td>
            <td>
          
            <button className="btn btn-warning">Editar</button>
            <button className="btn btn-danger" onClick={() => ctx.borrarCuenta(x.numero)}>Borrar</button>
            </td>
      </tr>
    );
}
export default TableRow;
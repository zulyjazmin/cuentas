import { useContext } from "react";
import TableRow from "./tablerow/tablerow.component";
import { CuentasContext } from "../cuentas.context";

const Table = ({ borrarCuenta }) => {

  const ctx = useContext(CuentasContext);

  return (
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
          {ctx.obtenerCatalogo()
            .sort((a, b) =>
              a.numero < b.numero ? -1 : 1
            )
            .map(x => (
              <TableRow borrarCuenta={borrarCuenta}
                x={x}
                key={x.numero} />

            ))}

        </tbody>
      </table>
    </main>
  )
}

export default Table;
import NavBar from './navbar/navbar.component';
import Table from './table/table.component';
import { CuentasProvider } from './cuentas.context';

const CuentasPage = () => {
 
  return (
      <CuentasProvider>
        <NavBar />
        <Table />
      </CuentasProvider>  
  );
}
export default CuentasPage;
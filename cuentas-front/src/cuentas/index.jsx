import NavBar from './navbar';
import Table from './table';
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
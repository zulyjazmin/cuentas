import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CuentasPage from "./cuentas/cuentas.page";


const router = createBrowserRouter([
  {
    path: '/',
    element: <CuentasPage />
  }
]);

const App = () => (
  <RouterProvider router={router} />

  
)
export default App;
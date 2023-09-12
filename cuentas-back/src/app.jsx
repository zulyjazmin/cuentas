import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PruebaModalPage from './prueba-modal/PruebaModalPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PruebaModalPage />

    }
]);

const App = () => (
    <RouterProvider router={router} />
)

export default App;
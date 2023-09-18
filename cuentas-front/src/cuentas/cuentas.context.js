import { createContext, useEffect, useState } from "react";

export const CuentasContext = createContext({

      crearCuenta() {},
      obtenerCatalogo() {},
      borrarCuenta() {},
});

export const CuentasProvider = ({ children }) =>
 {

  const [catalogo, setCatalogo] = useState([]);

  const cuentasService = {

      get catalogo() {
        return catalogo;
      },

      async obtenerCatalogo() {
            const res = await fetch('http://localhost:5000/cuenta', {
                 headers: {
                  'x-access-token': "1234"
                 }
            });


            const data = await res.json();

            setCatalogo(data);

            return data;
 
    },

    async crearCuenta(cuenta) {

      const res = await fetch('http://localhost:5000/cuenta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cuenta)
      });
       
      const result = await res.json();      
      await this.obtenerCatalogo();

    },

    async borrarCuenta(numero) {
      const res = await fetch('http://localhost:5000/cuenta/'+numero, {
        method: 'DELETE'
      });

      await res.json();
      await this.obtenerCatalogo();
    },
  };


  useEffect(() =>
  {
     cuentasService.obtenerCatalogo()
        .then(() => console.log('Catalogo cargado'));
  });

  return <CuentasContext.Provider children={children} value={cuentasService} />;
}

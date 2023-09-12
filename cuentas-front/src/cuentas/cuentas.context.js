import { createContext, useEffect, useState } from "react";

export const CuentasContext = createContext({
  async obtenerCatalogoInicial() {},
  crearCuenta() {},
  obtenerCatalogo() {},
  borrarCuenta() {},
});

export const CuentasProvider = ({ children }) => {
  const [catalogo, setCatalogo] = useState([]);

  const cuentasService = {
   async obtenerCatalogoInicial() {
    const res = await fetch('http://localhost:5000/cuenta/inicial');
    const data = await res.json();
    return data;
 
    },

    async crearCuenta() {

      const res = await fetch('http://localhost:5000/cuenta', {
        method: 'POST'
      });
      const nuevoCatalogo = await res.json();
  
      setCatalogo(nuevoCatalogo);
    },

    obtenerCatalogo() {
      return catalogo;
    },

    async borrarCuenta(numero) {
      const res = await fetch('http://localhost:5000/cuenta/'+numero, {
        method: 'DELETE'
      });
      const nuevoCatalogo = await res.json();
      setCatalogo(nuevoCatalogo);
    },
  };

  useEffect(() => {
    console.log("Inicializando catálogo");
    cuentasService.obtenerCatalogoInicial()
      .then(catalogo => setCatalogo(catalogo))
  }, []);

  return <CuentasContext.Provider children={children} value={cuentasService} />;
};

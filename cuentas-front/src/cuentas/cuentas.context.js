import { createContext, useEffect, useState } from "react";

export const CuentasContext = createContext({
  obtenerCatalogoInicial() {},
  crearCuenta() {},
  obtenerCatalogo() {},
  borrarCuenta() {},
});

export const CuentasProvider = ({ children }) => {
  const [catalogo, setCatalogo] = useState([]);

  const cuentasService = {
    obtenerCatalogoInicial() {
      return [
        { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
        { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD' },
        { numero: '020101', nombre: 'Cuentas por pagar', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' },
        { numero: '020101', nombre: 'Cuentas de zulyyyyy', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' },
      ];
    },

    crearCuenta() {
      const numero = prompt('Ingrese el numero de la cuenta');
      const nombre = prompt('Ingrese el nombre de la cuenta');
      const rubro = prompt('Ingrese el rubro de la cuenta');
      const subrubro = prompt('Ingrese el subrubro de la cuenta');
      const deposito = prompt('Ingrese el deposito de la cuenta');
      const moneda = prompt('Ingrese la moneda de la cuenta');

      const nuevoCatalogo = [...catalogo, {
        numero,
        nombre,
        rubro,
        subrubro,
        deposito,
        moneda,
      }];

      setCatalogo(nuevoCatalogo);
    },

    obtenerCatalogo() {
      return catalogo;
    },

    borrarCuenta(numero) {
      const nuevoCatalogo = catalogo.filter((x) => x.numero !== numero);
      setCatalogo(nuevoCatalogo);
    },
  };

  useEffect(() => {
    console.log("Inicializando catálogo");
    setCatalogo(cuentasService.obtenerCatalogoInicial());
  }, []);

  return <CuentasContext.Provider children={children} value={cuentasService} />;
};

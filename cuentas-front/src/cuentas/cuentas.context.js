import { createContext } from "react";

export const CuentasContext = createContext({
    crearCuenta() {},
    obtenerCatalogo() {},
    borrarCuenta() {},
});

  const cuentasService = { 

    catalogo: [
        { numero: '010101', nombre: 'Disponibilidades', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'ARS' },
        { numero: '010102', nombre: 'Cuentas a pagar', rubro: 'Activo', subrubro: 'Activo circulante', deposito: 'Banco Galicia', moneda: 'USD' },
        { numero: '020101', nombre: 'Cuentas por pagar', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' },
        { numero: '020101', nombre: 'Cuentas de zulyyyyy', rubro: 'Pasivo', subrubro: 'Activo circulante', deposito: 'Banco Patagonia', moneda: 'ARS' },
    ],
  
    crearCuenta() {},

    obtenerCatalogo() {
        return this.catalogo
    },

    borrarCuenta() {},

};

export const CuentasProvider = ({children}) =>
<CuentasContext.Provider children={children} value={cuentasService} />;
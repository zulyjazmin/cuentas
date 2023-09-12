import { useContext, useState } from "react";
import { CuentasContext } from "../cuentas.context";

function ModalDialog() 
{ const  ctx = useContext(CuentasContext);

  const [formState, setFormState] = useState({
              'numero': '',
              'nombre': '',
              'rubro': '',
              'subrubro': '',
              'deposito': '',
              'moneda':''
  });

  const getFormState = (prop)=> formState[prop];

  const updateFormState = (e) =>
  {
    const value = e.target.value;
    const key = e.target.id;


    setFormState({
      ...formState,
      [key]: value
    });

  }
  const executeCreate = () =>
  { 
   ctx.crearCuenta(formState);

   setFormState({
    'numero': '',
    'nombre': '',
    'rubro': '',
    'subrubro': '',
    'deposito': '',
    'moneda':''
});
}

  return (
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Cuenta</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {formState.keys().map((x, i) => (
              <div class="mb-3">
              <label for={x} class="form-label">{x.capitalize()} </label>
              <input type="text" class="form-control" id={x} onChange={updateFormState} value={getFormState(x)} />
            </div>
            ))}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-modal" onClick={executeCreate}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
            

  );
}
export default ModalDialog;
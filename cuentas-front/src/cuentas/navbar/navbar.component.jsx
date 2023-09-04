import React, { useContext } from 'react';
const NavBar = ({ crearCuenta }) => (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Catalogo de Cuentas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" onClick={crearCuenta}>Nueva</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
);
export default NavBar;
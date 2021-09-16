import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >BasketApp🛒</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/listar" className="nav-link active" aria-current="page" >Listar Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/guardar" className="nav-link active" aria-current="page" >Guardar Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Buscar por id/codigo</Link>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;


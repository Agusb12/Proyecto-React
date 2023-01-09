import './NavBar.css';
import { FaAlignJustify } from "react-icons/fa";
import React, { ReactDOM } from 'react';
 
function  NavBar () {
    return(
        <nav className="div-nav">
                <ul>
            <h1>PHONE FIXERS</h1>
                    <li>Inicio</li>
                    <li>Formulario</li>
                    <li>Contacto</li>
                
            </ul>
        </nav>
    )
}

export default NavBar;
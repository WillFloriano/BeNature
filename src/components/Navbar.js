import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="cabec">
                    <span className="be">be Nature</span>
                    <span className="by">by Nature</span>
                    <img src={logo} alt="beNature - byNature" /></div>
                <ul>
                    <li className="empresa"><Link to="/empresa" style={{ textDecoration: 'none' }}>Empresa</Link></li>
                    <li className="orcamento"><Link to="/orcamento" style={{ textDecoration: 'none' }}>Solicite um Orçamento</Link></li>
                    <li className="loc"><Link to="/localizacao" style={{ textDecoration: 'none' }}>Localização</Link></li>
                </ul>

            </div>
        </>
    );
}

export default Navbar
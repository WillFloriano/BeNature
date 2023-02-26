import React from 'react'
import style from '../style/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import Home from '../images/home.gif'
import Empresa from '../images/empresa.gif'
import Location from '../images/location.gif'
import Project from '../images/project.gif'
import Nature from '../images/nature.gif'


function Navbar() {
    return (
        <>
            <nav className={style.navbar}>
                <NavLink to="/" style={{ textDecoration: "none" }} className={style.brand}><img src={logo} alt=""></img></NavLink>
                <ul className={style.links_list}>
                    <li>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}><img src={Home} alt="Home"></img><span>Home</span></NavLink>
                    </li>
                    <li>
                    <NavLink to="/empresa" style={{ textDecoration: 'none', color: 'black' }}><img src={Empresa} className={style.empresa} alt="Empresa" /><span>Empresa</span></NavLink>
                    </li>
                    <li>
                    <NavLink to="/orcamento" style={{ textDecoration: 'none', color: 'black' }}><img src={Nature} alt="Vem ser Nature" /><span>Seja Nature</span></NavLink>
                    </li>
                    <li>
                    <NavLink to="/projeto" style={{ textDecoration: 'none', color: 'black' }}><img src={Project} alt="Projeto" /><span>Projeto</span></NavLink>
                    </li>
                    <li>
                    <NavLink to="/localizacao" style={{ textDecoration: 'none', color: 'black' }}><img src={Location} alt="localizacao" /><span>Localização</span></NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar
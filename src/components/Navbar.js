import React from 'react'
import style from '../style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Home from '../images/home.gif'
import Empresa from '../images/empresa.gif'
import Location from '../images/location.gif'
import Project from '../images/project.gif'
import Nature from '../images/nature.gif'


function Navbar() {
    return (
        <>
            <div className={style.navbar}>
                {/* <Link className="be" to="/" style={{ textDecoration: "none" }}><span>beNATURE</span></Link>
                    <Link className="by" to="/" style={{ textDecoration: "none" }}><span>byNATURE</span></Link> */}
                <Link className={style.cabec} to="/" style={{ textDecoration: "none" }}><img src={logo} alt=""></img></Link>
                <span className={style.home}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><img src={Home} alt="Home"></img></Link>
                </span>
                <div className={style.div}>
                    {/* <li className={style.empresa}></li>
                    <li className={style.nature}></li>
                    <li className={style.projeto}></li>
                    <li className={style.loc}></li> */}
                    <Link to="/empresa" style={{ textDecoration: 'none', color: 'black' }}><img src={Empresa} alt="Empresa" /></Link>
                    <Link to="/orcamento" style={{ textDecoration: 'none', color: 'black' }}><img src={Nature} alt="Vem ser Nature" /></Link>
                    <Link to="/projeto" style={{ textDecoration: 'none', color: 'black' }}><img src={Project} alt="Projeto" /></Link>
                    <Link to="/localizacao" style={{ textDecoration: 'none', color: 'black' }}><img src={Location} alt="localizacao" /></Link>
                </div>

            </div>
        </>
    );
}

export default Navbar
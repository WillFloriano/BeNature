import React from 'react'
import styles from '../style/Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                {/* <Link className="be" to="/" style={{ textDecoration: "none" }}><span>beNATURE</span></Link>
                    <Link className="by" to="/" style={{ textDecoration: "none" }}><span>byNATURE</span></Link> */}
                <Link className={styles.cabec} to="/" style={{ textDecoration: "none" }}><img src={logo} alt=""></img></Link>
                <span className={styles.home}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </span>
                <ul>
                    <li className="empresa"><Link to="/empresa" style={{ textDecoration: 'none' }}>Empresa</Link></li>
                    <li className="nature"><Link to="/orcamento" style={{ textDecoration: 'none' }}>Seja Nature</Link></li>
                    <li className="projeto"><Link to="/projeto" style={{ textDecoration: 'none' }}>Projeto</Link></li>
                    <li className="loc"><Link to="/localizacao" style={{ textDecoration: 'none' }}>Localização</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar
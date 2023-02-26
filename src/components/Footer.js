import React from 'react'
import styles from '../style/Footer.module.css'
import Wp from './Wp';

function Footer() {
    return (
        <>
            <div className={styles.footer}>
            <Wp/>
                <ul className={styles.ulFooter}>
                    <li>©beNature - byNature 2023 Todos os direitos reservados</li>
                    <li>CNPJ: 000.000.000/0000-00</li>
                    <li>Tel: (11)00000-0000</li>
                </ul>                
                    <div className={styles.powered}><b>Powered by WF Tecnology</b></div>                
            </div>
        </>
    );
}

export default Footer
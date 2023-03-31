import React from 'react'
import styles from '../style/Footer.module.css'
import Wp from './Wp';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Wp />
                <div className={styles.spanFooter}>
                    <span>©beNature - byNature 2023 Todos os direitos reservados</span>
                    <span>CNPJ: 000.000.000/0000-00</span>
                    <span>Tel: (11)00000-0000</span>
                </div>

            </footer>
        </>
    );
}

export default Footer
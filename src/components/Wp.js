import React from 'react'
import wp from '../images/whats.png'
import styles from'../style/Wp.module.css'

function Wp() {
    return (
        <>
            <div className={styles.wp}>
                <a id="rodape_lnkwhats" href="https://api.whatsapp.com/send?phone=5511958172836&text=Ola, gostaria de saber mais sobre os serviços." target="_blank" rel="noopener noreferrer">
                    <img src={wp} alt="Whatsapp" />
                </a>
            </div>
        </>
    );
}

export default Wp
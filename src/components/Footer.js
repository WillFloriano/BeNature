import React from 'react'
import './Footer.css'
import Wp from './Wp';

function Footer() {
    return (
        <>
            <div className="footer">
            <Wp/>
                <ul className="ulFooter">
                    <li>©beNature - byNature 2023 Todos os direitos reservados</li>
                    <li>CNPJ: 000.000.000/0000-00</li>
                    <li>Tel: (11)00000-0000</li>
                </ul>                
                    <div className="powered">Powered by WF Tecnology</div>                
            </div>
        </>
    );
}

export default Footer
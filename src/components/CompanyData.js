import React from 'react'
import { useState } from "react"
import styles from '../style/Orcamento.module.css'


const CompanyData = () => {

    const [razao, setRazao] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [fantasia, setFantasia] = useState("");

    return (
        <div className={styles.formEmp}>
            <div className={styles.empresarial}>Dados Empresariais</div>
            <label>
                <input type="text" className="txtRazao" placeholder="Razao Social" value={razao} name="razao" onChange={(e) => setRazao(e.target.value)} required ></input>
                <input type="text" className="txtCnpj" placeholder="CNPJ da empresa" value={cnpj} name="cnpj" onChange={(e) => setCNPJ(e.target.value)} required ></input>
                <input type="text" className="txtFantasia" placeholder="Nome Fantasia" value={fantasia} name="fantasia" onChange={(e) => setFantasia(e.target.value)} required></input>
            </label>
        </div>
    )
}

export default CompanyData
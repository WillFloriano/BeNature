import React from 'react'
import { useState } from "react"
import styles from '../style/Orcamento.module.css'


const PersonalData = () => {

    const [cpf, setCPF] = useState("");
    const [sexo, setSexo] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    return (
        <div>
            <div className={styles.pessoal}>Dados Pessoais</div>
            <label>
                <input type="text" placeholder="CPF" value={cpf} name="cpf" onChange={(e) => setCPF(e.target.value)} required></input>
                <input type="text" placeholder="Sexo" value={sexo} name="sexo" onChange={(e) => setSexo(e.target.value)} required></input>
                <input type="text" placeholder="Nome" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} required></input>
                <input type="text" placeholder="Sobrenome" value={sobrenome} name="sobrenome" onChange={(e) => setSobrenome(e.target.value)} required></input>
                <input type="email" placeholder="Email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="number" placeholder="Telefone" value={tel} name="telefone" onChange={(e) => setTel(e.target.value)} required></input>
            </label>
        </div>
    )
}

export default PersonalData
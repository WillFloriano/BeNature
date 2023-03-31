import React from 'react'
import { useState } from "react"
import styles from '../style/Orcamento.module.css'


const AddressData = () => {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <div>
            <div className={styles.endereco}>Endereço</div>
            <label>
                <input type="text" placeholder="CEP" value={cep} name="cep" onChange={(e) => setCep(e.target.value)} required></input>
                <input type="text" placeholder="Logradouro" value={logradouro} name="log" onChange={(e) => setLogradouro(e.target.value)} required></input>
                <input type="number" placeholder="Numero" value={numero} name="numero" onChange={(e) => setNumero(e.target.value)} required></input>
                <input type="text" placeholder="Complemento" value={complemento} name="comp" onChange={(e) => setComplemento(e.target.value)} required></input>
                <input type="text" placeholder="Bairro" value={bairro} name="bairro" onChange={(e) => setBairro(e.target.value)} required></input>
                <input type="text" placeholder="Cidade" value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} required></input>
                <input type="text" placeholder="Estado" value={estado} name="estado" onChange={(e) => setEstado(e.target.value)} required></input>
                <br />
                {/* {!loading && <button className="btnInsert">Enviar</button>} */}
                {/* {loading && <button className="btnInsert" disabled>Aguarde...</button>} */}

            </label>
        </div>
    )
}

export default AddressData
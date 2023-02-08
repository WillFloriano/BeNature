import { useState } from 'react'
import React from 'react'

import '../App.css'


function Orcamento() {

    const [razao, setRazao] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [contato, setContato] = useState("");
    const [tel, SetTel] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
                    <label className="containerlanc">
                        <input type="text" className="txtRazao" placeholder="Razao Social" value={razao} name="razao" onChange={(e) => setRazao(e.target.value)} ></input>
                        <input type="text" className="txtCnpj" placeholder="CNPJ da empresa" value={cnpj} name="cnpj" onChange={(e) => setCNPJ(e.target.value)} ></input>
                        <input type="text" className="txtContato" placeholder="Contato da empresa" value={contato} name="contato" onChange={(e) => setContato(e.target.value)}></input>
                        <input type="number" className="txtTel" placeholder="Telefone de contato" value={tel} name="tel" onChange={(e) => SetTel(e.target.value)}></input>
                        <br />
                        <button className="btnInsert">Enviar</button>
                    </label>
                </form>
    </div>
  )
}

export default Orcamento
import { useState } from 'react'
import React from 'react'
import styles from '../style/Orcamento.module.css'
import '../App.css'


function Orcamento() {

  const [razao, setRazao] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [fantasia, setFantasia] = useState("");
  const [tel, setTel] = useState("");

  const [cpf, setCPF] = useState("");
  const [sexo, setSexo] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formEmp}>
          <div className={styles.empresarial}>Dados Empresariais</div>
          <label className={styles.lblOrcamento}>
            <input type="text" className="txtRazao" placeholder="Razao Social" value={razao} name="razao" onChange={(e) => setRazao(e.target.value)} required ></input>
            <input type="text" className="txtCnpj" placeholder="CNPJ da empresa" value={cnpj} name="cnpj" onChange={(e) => setCNPJ(e.target.value)} required ></input>
            <input type="text" className="txtFantasia" placeholder="Nome Fantasia" value={fantasia} name="fantasia" onChange={(e) => setFantasia(e.target.value)} required></input>
          </label>
        </div>
        <div>
          <div className={styles.pessoal}>Dados Pessoais</div>
          <label className={styles.lblOrcamento}>
            <input type="text" placeholder="CPF" value={cpf} name="cpf" onChange={(e) => setCPF(e.target.value)} required></input>
            <input type="text" placeholder="Sexo" value={sexo} name="sexo" onChange={(e) => setSexo(e.target.value)} required></input>
            <input type="text" placeholder="Nome" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} required></input>
            <input type="text" placeholder="Sobrenome" value={sobrenome} name="sobrenome" onChange={(e) => setSobrenome(e.target.value)} required></input>
            <input type="email" placeholder="Email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="number" placeholder="Telefone" value={tel} name="telefone" onChange={(e) => setTel(e.target.value)} required></input>
          </label>
        </div>
        <div>
          <div className={styles.endereco}>Endereço</div>
          <label className={styles.lblOrcamento}>
            <input type="text" placeholder="CEP" value={cep} name="cep" onChange={(e) => setCep(e.target.value)} required></input>
            <input type="text" placeholder="Logradouro" value={logradouro} name="log" onChange={(e) => setLogradouro(e.target.value)} required></input>
            <input type="number" placeholder="Numero" value={numero} name="numero" onChange={(e) => setNumero(e.target.value)} required></input>
            <input type="text" placeholder="Complemento" value={complemento} name="comp" onChange={(e) => setComplemento(e.target.value)} required></input>
            <input type="text" placeholder="Bairro" value={bairro} name="bairro" onChange={(e) => setBairro(e.target.value)} required></input>
            <input type="text" placeholder="Cidade" value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} required></input>
            <input type="text" placeholder="Estado" value={estado} name="estado" onChange={(e) => setEstado(e.target.value)} required></input>
            <br/>
            <button className="btnInsert">Enviar</button>
          </label>
        </div>
      </form >
    </div >
  )
}

export default Orcamento
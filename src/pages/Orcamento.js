import { useState, useEffect } from 'react'
import React from 'react'
import styles from '../style/Orcamento.module.css'
import '../App.css'
//import { useAuthentication } from '../hooks/userAuthentication';

import {GrFormNext,GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import PersonalData from '../components/PersonalData'
import AddressData from '../components/AddressData'
import CompanyData from '../components/CompanyData'

//hooks

import { useForm } from '../hooks/useForm'


function Orcamento() {

  const [error, setError] = useState("")

  //const {createOrcamento, error: authError, loading} = createOrcamento();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    // const orcamento = {
    //   razao,
    //   cnpj,
    //   fantasia,
    //   cpf,
    //   sexo,
    //   nome,
    //   sobrenome,
    //   email,
    //   tel,
    //   cep,
    //   logradouro,
    //   numero,
    //   complemento,
    //   bairro,
    //   cidade,
    //   estado
    // }

    // if(password !== confirmPassword){
    //   setError("As senhas precisam ser iguais!")
    //   return
    // }

    //const res = await createOrcamento(orcamento);

  };

  // useEffect(() => {
  //   if(authError) {
  //     setError(authError)
  //   }
  // }, [authError])

  const formComponents = [<PersonalData/>,<AddressData/>,<CompanyData/>,];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">{currentComponent}</div>
        <div className="actions">
          {!isFirstStep && (
            <button className="btnInsert" type="button" onClick={() => changeStep(currentStep - 1)}>
            <GrFormPrevious/>
            <span>Voltar</span>
            </button>
          )}
          {!isLastStep ? (
            <button className="btnInsert" type="button" onClick={() => changeStep(currentStep + 1)}>
            <span>Avançar<GrFormNext/></span>
          </button>
          ) : (
            <button className="btnInsert" type="submit">
            <span>Enviar
              <FiSend/>
            </span>
          </button>
          )}
          {error && <p className="error">{error}</p>}
        </div>        
      </form >
    </div >
  )
}

export default Orcamento
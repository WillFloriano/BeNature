import React from 'react'
import './Empresa.css'

function Empresa() {
  return (
    <div>      
      <div className="empresa">
        <label className="lblSpan">
        <h2>O que fazemos ?</h2>
          <span>
            - Planejamento e execução de projetos que geram impacto social positivo.</span>
          <span>- Conciliamos o Business tradicional, a consciência e a sustentabilidade.</span>
          <span>- Executamos projetos que se auto sustentam, cobrindo seus próprios custos e também realizamos projetos a partir de investimentos coletivos.</span>
          <span>- Criamos parcerias, buscando meios de viabilização.</span>
          <span>- Implementamos ações empresariais de responsabilidade social, mudanças nas políticas empresariais e nos processos produtivos.</span>
        </label>
        <label className="lblMetas">
        <h2>Metas</h2>
          <span>
            - Maximização do impacto social, seja por medidas de conscientização ouna execução dos projetos..</span>
          <span>- Priorizar a sustentabilidade, adotando práticas da economia circular..</span>
          <span>- Reduzir o consumo de sacolinhas plásticas através do projeto Eco - Friendly Bag's e conscientizar sobre o consumo responsável de sacolas plásticas.</span>
          <span>- Gerar empregos e renda, incentivando o empreendedorismo através do canal de vendas Empreendedor byNATURE..</span>
          <span>- Revitalizar pontos públicos como praças, quadras poliesportivas, parques e jardins através do projeto Revitalização de comunidades - a favor do esporte.</span>
        </label>
        <label className="lblPojeto">
        <h2>Projeto</h2>
          <span>
            - Eco Friendly Bag's - sacolas ecológicas..</span>
          <span>- Empreendedor byNATURE.</span>
          <span>- Revitalização de comunidades - a favor do esporte..</span>
        </label>
      </div>

    </div >
  )
}

export default Empresa
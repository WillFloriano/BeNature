import React from 'react'
import styles from '../style/Empresa.module.css'

function Empresa() {
  return (
    <div>      
      <div className={styles.empresa}>
        <label className="lblSpan">
        <h2>Quem Somos</h2>
          <span>
            - Utilizando estratégias e metodologias ágeis, somos uma empresa que planeja, executa e avalia processos e projetos de responsabilidade social.</span>
          <span>- Acreditando em novos processos sustentáveis e em iniciativas que favorecem a sociedade e seu ambiente como um todo.</span>
          <span>- Nós da beNATURE byNATURE realizamos atividades baseadas na força do empreendedorismo e do senso de coletividade para o desenvolvimento econômico.</span>          
        </label>
        <label className="lblSomos">
        <h2>O que fazemos</h2>
          <span>
            - Planejamento e execução de projetos que geram impacto social positivo.</span>
          <span>- Conciliamos o <i>business</i> tradicional, a consciência e a sustentabilidade.</span>
          <span>- Executamos projetos que são autossustentáveis.</span>
          <span>- Realizamos projetos a partir de investimentos coletivos.</span>
          <span>- Criamos parcerias, buscando meios de viabilização.</span>
          <span>- Implementamos ações empresariais de responsabilidade social, mudanças nas políticas empresariais e nos processos produtivos.</span>
        </label>
        <label className="lblMeta">
        <h2>Metas</h2>
          <span>
            - Maximização do impacto social, seja por medidas de conscientização ou na execução dos projetos.</span>
          <span>- Priorizar a sustentabilidade, adotando práticas da economia circular.</span>
          <span>- Reduzir o consumo de sacolinhas plásticas através do projeto Eco - Friendly Bag's e conscientizar sobre o consumo responsável de sacolas plásticas.</span>
        </label>
        <label className="lblProjeto">
        <h2>Projetos e Ações</h2>
          <span>
            - Eco Friendly Bag's - sacolas ecológicas.</span>
          <span>- Projeto Eco - Friendly Bag's - sacolas ecológicas.</span>          
        </label>
      </div>

    </div >
  )
}

export default Empresa
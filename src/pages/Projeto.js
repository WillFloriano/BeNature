import React from 'react'
import style from '../style/Projeto.module.css'
import video from '../video/video.mp4'

function Projeto() {
  return (
    <div className={style.container}>
      <div>
        <video src={video} autoPlay="true" className={style.video}></video>
      </div>
      <div className={style.projeto}>       
          <h2>Projeto</h2>
          <p>- Causar impacto social através de ações de responsabilidade social e de novas iniciativas nas políticas empresariais, tornando estabelecimentos mais sustentáveis, reduzindo o impacto de suas atividades no meio ambiente.</p>       
          <h2>Metas</h2>
          <p>- Reduzir o consumo de sacolas plásticas dos estabelecimentos através do projeto Eco - friendly Bag's.</p>
          <p>- Conscientizar a população e propagar cada vez mais a cultura da utilização de Ecobags sustentáveis.</p>                
          <h2>Para sua Empresa</h2>
          <p>- O projeto Eco - friendly Bag's quer dar direcionamento aos estabelecimentos que se tornam parceiros, implementando ações de responsabilidade socioambiental.</p>
          <p>- Através do marketing de conscientização, o projeto visa atingir resultados significativos na relação de consumo que o cliente tem com as sacolas ecológicas e sua utilização.</p>
          <p>- Para sua empresa, destacamos a redução da quantidade de sacolas distribuídas ao ano. Além de tornar-se uma empresa consciente e responsável.</p>
          <p>- O projeto promove a aproximação e melhora no relacionamento entre estabelecimento e consumidor.</p>
          <p>- O objetivo maior é de diminuir o consumo de sacolas plásticas, então se você quer reduzir esse número em seu negócio ou se o seu estabelecimento utiliza um número exagerado de sacolas plásticas esse projeto é para você, entre em contato conosco.</p>        
      </div>

    </div >
  )
}

export default Projeto
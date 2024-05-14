
import ProjectForm from '../project/ProjectForm'
import style from './NovoProjeto.module.css'


function NovoProjeto() {
  return (
        <section className={style.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </section>
  )
}

export default NovoProjeto

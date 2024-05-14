
import {useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import style from './NovoProjeto.module.css'


function NovoProjeto() {

    const navigate = useNavigate ()

    function createPost(project){

        // initialize and services
        project.cost = 0
        project.services = []

        fetch("https://localhost:5000/project", {
            method: "POST",
            header: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projeto', { message: 'Projeto criado com sucesso' })
        })
        .catch((err) => console.log(err))
    }

  return (
        <section className={style.newProjectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </section>
  )
}

export default NovoProjeto

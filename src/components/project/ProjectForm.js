
import style from './ProjectForm.module.css'

import { useEffect, useState } from 'react'


import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    // o useEffect impede que seja feita uma requisição infinita
    useEffect(()=>{
        fetch("http://localhost:5000/categories", {
            method:"GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))
    }, [])

    function submit(e) {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleChangeCategory(e){
        setProject({...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
            //category: e.target.value
        })
    }

  return (
    <form onSubmit={submit} className={style.form}>
        <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
        />

        <Input
            type="number"
            text="Orçamento do projeto"
            name="orcamento"
            placeholder="Insira o orçamento total"
            handleOnChange={handleChange}
            value={project.orcamento ? project.orcamento : ''}
        />
        <Select
            name="category_id"
            text="Selecione a categoria"
            options={categories}
            value={project.category ? project.category : ''}
            handleOnChange={handleChangeCategory}
        />
        <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm

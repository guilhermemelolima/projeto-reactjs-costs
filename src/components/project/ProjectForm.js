
import style from './ProjectForm.module.css'

import { useEffect, useState } from 'react'


import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([])

    // o useEffect impede que seja feita uma requisição infinita
    useEffect(()=>{
        fetch("http://localhost:3100/categories", {
            method:"GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))
    }, [])



  return (
    <form className={style.form}>
        <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
        <Input type="number" text="Orçamento do projeto" name="orcamento" placeholder="Insira o orçamento total"/>
        <Select name="category_id" text="Selecione a categoria" options={categories}/>
        <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm

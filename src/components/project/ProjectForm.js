import Input from '../form/Input.jsx'
import Select from '../form/Select.jsx'
import SubmitButton from '../form/SubmitButton.jsx'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}){
    return( 
    <form className = {styles.form} >
        <Input type = "text" text = "Nome do projeto" name = "name" placeholder="Insira o nome do projeto"/>
        <Input type = "number" text = "Orçamento do projeto" name = "budget" placeholder="Insira o orçamento total"/>
        <Select name = "Category_id" text = "Selecione a categoria"/>
        <SubmitButton text={btnText} />
    </form>
    )
}


export default ProjectForm
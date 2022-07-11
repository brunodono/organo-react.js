import { useState } from 'react'
import InputText from '../InputText'
import './Form.css'
import Dropdown from '../Dropdown'
import Button from '../Button'

const Form = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTimes] = useState('')

    const whenSaving = (event) => {
        event.preventDefault()
        props.onCollabRegistered({
            nome:nome, 
            cargo:cargo, 
            imagem:imagem, 
            times:times
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTimes('')
    };

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText 
                value={nome} 
                whenChanged={value => setNome(value)} 
                haveTo={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                />
                <InputText 
                value={cargo}
                whenChanged={value => setCargo(value)}
                haveTo={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                />
                <InputText 
                value={imagem}
                whenChanged={value => setImagem(value)}
                label="Imagem" 
                placeholder="Informe o endereco da imagem" 
                />
                <Dropdown
                value={times}
                whenChanged={value => setTimes(value)}
                haveTo={true} 
                label="Times" 
                itens={props.teams} 
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}


export default Form
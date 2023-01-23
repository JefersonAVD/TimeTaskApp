import { useState } from "react";
import Botao from "../botao";
import style from  "./formulario.module.scss";
import { ITarefas } from "../../types";
import {v4 as uuidv4} from "uuid";


function Formulario({setTarefas}:{setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>}) {
    let [formulario, setFormulario] = useState({tarefa:"",data:"",hora:""})
    const submit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        setTarefas(tarefaAntiga=>[...tarefaAntiga,{...formulario,conclusao:"",selecionado:false, completado:false,id:uuidv4()}])
        setFormulario({tarefa:"",data:"",hora:""});
    }
    const change = (event: React.ChangeEvent<HTMLInputElement>)=>{
        let element = event.target.name;
        setFormulario({...formulario,[element]:event.target.value});
    }
    return (
        <form className={style.novaTarefa} onSubmit={submit}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Tarefa</label>
                <input 
                type="text" 
                name='tarefa' 
                id='tarefa' 
                placeholder='Nome da tarefa' 
                required
                value={formulario.tarefa}
                onChange={change} />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="data">Dia</label>
                <input 
                type="date" 
                name='data' 
                id='data' 
                onChange={change}
                value={formulario.data}
                required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="hora">Hora</label>
                <input 
                type="time" 
                name='hora' 
                id='hora' 
                onChange={change} 
                step={1} 
                min="00:00:00" 
                max="24:00:00"  
                value={formulario.hora}
                required />
            </div>
            <Botao>Adicionar Tarefa</Botao>
        </form>
    )
}

export default Formulario;
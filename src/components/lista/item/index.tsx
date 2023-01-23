import { ITarefas } from "../../../types";
import style from "./item.module.scss";

interface IProp extends ITarefas{
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Item = ({tarefa,data,hora,selecionado,completado,id,conclusao,selecionaTarefa}:IProp) =>{
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado:""} ${completado ? `${style.itemCompletado} ${style.concluido}`:""}`} 
        onClick={()=>selecionaTarefa({tarefa,hora,data,selecionado,completado,id,conclusao})}>
            <h3>{tarefa}</h3>
            <p>Data: {data}</p>
            <p>Hora: {hora}</p>
            <p>Tempo de Conclusão: {conclusao}</p>
        </li>
    )
}

export default Item;
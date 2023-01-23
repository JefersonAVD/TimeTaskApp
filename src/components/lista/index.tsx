import { ITarefas } from "../../types";
import Item from "./item";
import style from "./lista.module.scss";

interface IProp{
    tarefas:ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Lista = ({tarefas, selecionaTarefa}:IProp) =>{
    return(
        <aside className={style.listaTarefa}>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tarefas.map(item=>{
                    if(item.tarefa==="") {
                        return;
                    };
                    return(
                        <Item key={item.id} selecionaTarefa={selecionaTarefa} {...item}/> 

                    );
                })}
            </ul>
        </aside>

    )
}

export default Lista;
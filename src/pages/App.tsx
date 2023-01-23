import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import Style from "./app.module.scss";
import {useState} from "react";
import { ITarefas } from '../types';
import { secToTime } from '../common/utils/date';
import { useEffect } from 'react';

function App() {
  const [tarefas , setTarefas] = useState([{tarefa:"",data:"",hora:"",selecionado:false,completado:false,id:"",conclusao:""}])
  const [selecionado, setSelecionado] = useState<ITarefas>();

  const selecionaTarefa = (tarefaSelecionada:ITarefas) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas=> tarefasAntigas.map(tarefa=>({...tarefa,selecionado: tarefa.id === tarefaSelecionada?.id ?true:false}) ))
  }
  
  const finalizarTarefa = (conclusao:string)=>{
    let{decMin,uniMin,decSec,uniSec} =secToTime(conclusao);
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAntigas =>
         tarefasAntigas.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return { ...tarefa, selecionado: false, completado: true, conclusao: `${decMin}${uniMin}:${decSec}${uniSec}` };
          }
          return tarefa;
        })
      )
    }

  }

  return (
    <div className={Style.App}>
      <Formulario setTarefas = {setTarefas}/>
      <Lista selecionaTarefa={selecionaTarefa} tarefas={tarefas}/>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
    
  );
}

export default App;

import Relogio from "./relogio";
import style from "./crono.module.scss";
import Botao from "../botao";
import { useEffect, useState } from "react";
import { ITarefas } from "../../types";

interface Props{
    finalizarTarefa:(valor:string)=>void,
    selecionado:ITarefas | undefined,
}

export default function Cronometro ({selecionado,finalizarTarefa}:Props){
    let [tempo, setTempo] = useState<number>(0);
    let [rodando, setRodando] = useState<boolean>();
    let liberado = selecionado?.id ? true : false

    const contador = ()=>{
        setRodando(true)
    }
    const parar = ()=>{
        setRodando(false);
        finalizarTarefa(String(tempo));
        setTempo(0);
    }

    useEffect(()=>{
        let timerId:number;
        if (rodando){
            timerId = Number(setInterval(()=>setTempo((tempo=0)=>tempo+1),1000));
        }
        return()=>clearInterval(timerId); 
    },[rodando]);

    return(
        <div className={style.cronometro}>
            <h2 className={style.titulo}>Cronometre o tempo da tarefa</h2>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao funcoes={{contador,parar}} rodando={rodando} liberado={liberado}>{rodando?"Parar":"Iniciar"}</Botao>
        </div>
    );
}
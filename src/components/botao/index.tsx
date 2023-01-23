import style from "./botao.module.scss";

interface Props {
    children: React.ReactNode,
    liberado?:boolean,
    funcoes?: {
        contador: ()=> void;
        parar: ()=> void;
    },
    rodando?:boolean
}

const Botao  = ({children,funcoes,rodando,liberado}:Props) =>{
    if(funcoes){
        const {parar,contador} = funcoes;
        return(
            <button onClick={rodando? parar : contador} className={`${style.botao} ${!liberado ?style.desabilitado:""}`}>{children}</button>
        );
    }
    return(
        <button className={style.botao}>{children}</button>
    );
}

export default Botao;
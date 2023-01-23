import style from "./relogio.module.scss";

interface Prop{
    tempo:number | undefined;
}

export default function Relogio({tempo=0}:Prop){
    let minuto = Math.floor(tempo/60);
    let segundo = tempo % 60;

    const [minDezena,minUnidade] = String(minuto).padStart(2,'0');
    const [secDezena,secUnidade] = String(segundo).padStart(2,'0');

    return(
        <>
            <span className={style.relogioNumero}>{minDezena}</span>
            <span className={style.relogioNumero}>{minUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secDezena}</span>
            <span className={style.relogioNumero}>{secUnidade}</span>
        </>
    );
}
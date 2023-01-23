export function timeToSeconds(tempo:string){
    let [horas = "0", minutos= "0", segundos = "0"]:Array<string> = tempo.split(":");
    return Number(horas)*3600 + Number(minutos) * 60 + Number(segundos);
}

export function secToTime(tempo:string){
    let Min = Math.floor(Number(tempo)/60);
    let Sec = Number(tempo) % 60;
    let[decMin,uniMin] = String(Min).padStart(2,"0");
    let[decSec,uniSec] = String(Sec).padStart(2,"0");

    return {decMin,uniMin,decSec,uniSec};
}
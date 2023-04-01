
const contagem = () => {
    const dataFinal = new Date('Dec 31, 2023 23:59:00').getTime()
    const dataAtual = new Date().getTime()
    
    const diferenca = dataFinal - dataAtual

    
    let segundos = 1000
    let minutos = segundos * 60
    let horas = minutos * 60
    let dias = horas * 24 

    
    let tempoDias = Math.floor(diferenca / dias)
    let tempoHoras = Math.floor((diferenca % dias) / horas)
    let tempoMinutos = Math.floor((diferenca % horas) / minutos)
    let tempoSegundos = Math.floor((diferenca % minutos) / segundos)

    tempoHoras = tempoHoras < 10 ? "0" + tempoHoras : tempoHoras
    tempoMinutos = tempoMinutos < 10 ? "0" + tempoMinutos : tempoMinutos
    tempoSegundos = tempoSegundos < 10 ? "0" + tempoSegundos : tempoSegundos

    document.getElementById ("dias").innerHTML = tempoDias
    document.getElementById ("horas").innerHTML = tempoHoras
    document.getElementById ("minutos").innerHTML = tempoMinutos
    document.getElementById ("segundos").innerHTML = tempoSegundos

}

setInterval(contagem, 1000)


function contar() {
    var dadosInicio = document.getElementById("inicio").value
    var dadosFim = document.getElementById("fim").value
    var dadosPasso = document.getElementById("passo").value

    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)
    var resultado = document.getElementById("resultado")

    if (dadosInicio.length == 0 || dadosFim.length == 0 || dadosPasso.length == 0) {
        window.alert("Dados insuficientes. Por favor, informe todos os dados.")
    } else {
        if (inicio <= fim && passo > fim) {
        window.alert("Valor de passo incorreto. Por favor, verifique e insira novamente.")
        } else if (inicio <= fim) {
            for (var contador = inicio; contador <= fim; contador += passo) {
                resultado.innerHTML += `${contador}  `
        }} else if (inicio > fim && passo > inicio){ 
        window.alert("Valor de passo incorreto. Por favor, verifique e insira novamente.")

        } else if (inicio > fim) {
        for (var contador = inicio; contador >= fim; contador -= passo) {
                resultado.innerHTML += `${contador}  `
        }
        } 
    }
}
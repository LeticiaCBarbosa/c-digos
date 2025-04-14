function tempcal () {
    let n = document.getElementById("grausc").value 
    let calculo = (n * 1.8) + 32
    document.getElementById("resultado").innerHTML =
    `${n} graus celcius em fahrenheit é ${calculo.toFixed(2)} `
}
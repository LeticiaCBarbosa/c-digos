function imc() {
    const massa = document.getElementById("massa").value;
    const altura = document.querySelector("#altura").value;

    const resultado = massa / (altura ** 2);
    document.getElementById("resultado").innerHTML =
        "Valor do IMC = " + resultado.toFixed(2);

    let situacao;
    if (resultado < 18.5) situacao = "MAGREZA"
    else if (resultado <= 24.9) situacao = "NORMAL"
    else if (resultado <= 29.9) situacao = "SOBREPESO"
    else if (resultado <= 39.9) situacao = "OBESIDADE"
    else situacao = "OBESIDADE GRAVE"
    document.getElementById("situacao").innerHTML = 
        "Situação " + situacao;
}

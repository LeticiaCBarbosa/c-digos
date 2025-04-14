function calca() {
    largura = document.getElementById("larg").value;
    altura = document.getElementById("alt").value;

    if (isNaN(largura) && isNaN(altura)) {alert("Favor, inserir valores válidos")
return}

    let calculo = (largura * altura)

    document.getElementById("resultado").innerHTML =
    `A área do retângulo de largura ${largura} e altura ${altura} é ${calculo}`
}
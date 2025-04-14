function fatorial() {
    let n = document.getElementById("num").value;
    let fator = 1
    for (i = 2; i <= n; i++)
        fator = i * fator

    document.getElementById("resultado").innerHTML =
        `${n}! = ${fator}`
}
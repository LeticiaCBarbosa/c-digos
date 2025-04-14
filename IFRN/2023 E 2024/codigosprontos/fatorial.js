/*
function fatorial(n) {
    let fator = 1
    for (let i = 2; i <= n; i ++)
        fator = i * fator
    return fator
}
console.log(fatorial(5));
*/

function fatorial() {
    let n = document.getElementById("numero").value;
    let fator = 1
    for (let i = 2; i <= n; i ++)
        fator = i * fator
    document.getElementById("resultado").innerHTML =
    `Fatorial(${n}) = ${fator}`;
}
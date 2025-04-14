function pi() {
    n = document.getElementById("numero").value 
    if (n%2 === 0) 
    document.getElementById("resultado").innerHTML =
    `${n} é par`
    else
    document.getElementById("resultado").innerHTML =
    `${n} é ímpar`
}
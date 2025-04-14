function telefone() {
    let numero = document.getElementById('tele').value

    if (numero.length < 11 || numero.length > 11 )
        alert ("Para um número ser válido precisa conter 11 digitos, no formato (xx) x xxxx-xxxx")
    else alert ("Número validado")
}
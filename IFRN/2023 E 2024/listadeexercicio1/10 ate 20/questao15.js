function palin() {
    let frase = document.getElementById("fras").value;
    let frasenova = frase.toLowerCase()
    frasenova = frasenova.replace(/ /g, '');
    
    let split = frasenova.split('') //divide a frase em uma lista de caracteres
    let reverse = split.reverse() //copia a lista e reverte a ordem dos caracteres
    let join = reverse.join('') //junta a lista numa string novamente

    if (join === frasenova) {
        document.getElementById("resultado").innerHTML =
        `${frase} é um palíndromo`
    } else { document.getElementById("resultado").innerHTML = `${frase} não é um palíndromo`}
}
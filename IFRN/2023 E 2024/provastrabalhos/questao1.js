function fr() {
    string = document.getElementById("frases").value
    numero = document.getElementById("repete").value
    
    let i = 0;
    do {
    document.getElementById("resultado").innerHTML = `${string}`
    i++; } 
    while (i < numero); return}

    
    /* let i = 0;
    while (i<numero) {
        document.getElementById("resultado").innerHTML = `${string}` }
        i++; */

    /* let num = 0;
    while (num < 5) {
    console.log("Número: " + num);
    num++;*/

    /*let i = 0;
    do {
    console.log("Número: " + i);
    i++;
    } while (i < 5);*/
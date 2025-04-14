function calclet() {
    let texto = document.getElementById("pf").value.toLowerCase();
    let letra = document.getElementById("letr").value.toLowerCase();
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    } 
    document.getElementById("resultado").innerHTML =
    `A letra ${letra} se repete ${contador} vezes`
}
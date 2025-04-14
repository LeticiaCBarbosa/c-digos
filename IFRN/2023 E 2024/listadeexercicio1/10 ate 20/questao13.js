function espaco() {
    n = document.getElementById("frase").value
    if (n.includes (" ")) {
        let b = n.replace(/ /g, '');
            document.getElementById("resultado").innerHTML =
            `${b}`}
else document.getElementById("resultado").innerHTML = `${n}`
}

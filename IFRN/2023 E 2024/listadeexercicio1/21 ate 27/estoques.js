function cats() {
    let nome = document.getElementById("n").value
    let quantidade = document.getElementById("q").value
    let categoria = document.getElementById("c").value
    let peso = document.getElementById("p").value


    if (!nome || !quantidade || ! categoria || !peso){
        alert('PREENCHA TODOS OS CAMPOS')
        return
    }

    let tabela = document.getElementById("tabela")
    let nlinha = tabela.insertRow(-1)
    let celnome = nlinha.insertCell(0)
    let celquantidade = nlinha.insertCell(1)
    let celcategoria = nlinha.insertCell(2)
    let celpeso = nlinha.insertCell(3)

    celnome.textContent = nome
    celquantidade.textContent = quantidade
    celcategoria.textContent = categoria
    celpeso.textContent = peso


    document.getElementById('invent').reset()
}


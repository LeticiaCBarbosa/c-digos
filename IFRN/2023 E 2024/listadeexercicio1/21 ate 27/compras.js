function ap() {
    let nome = document.getElementById('npizza').value;
    let preco = document.getElementById('preco').value;
    let tam = document.getElementById('cat').value;
    let desc = document.getElementById('desc').value;
    
    if (!nome || !preco || !tam || !desc) {
        alert("PREENCHA TODOS OS CAMPOS");
        return
    }
    let tabela = document.getElementById('tabela');
    let nlinha = tabela.insertRow(-1);
    let celnome = nlinha.insertCell(0);
    let celpreco = nlinha.insertCell(1);
    let celcat = nlinha.insertCell(2);
    let celdesc = nlinha.insertCell(3);

    celnome.textContent = nome;
    celpreco.textContent = preco;
    celcat.textContent = tam;
    celdesc.textContent = desc;

    document.getElementById('formproduto').reset()
}
let listaItens = [];
var emAlteracao = false;
let indiceElementoAlteracao = -1;

function gravar(event) {
    event.preventDefault()
    let nomeI = document.getElementById("nomeitem").value;
    let qtdI = document.getElementById("qtditem").value;
    let valorI = document.getElementById("valoritem").value;
    let fornI = document.getElementById("fornitem").value;

    let item = {
        nomeI: nomeI,
        qtdI: qtdI,
        valorI: valorI,
        fornI: fornI
    }

    if (emAlteracao) {
        listaItens[indiceElementoAlteracao] = item;
    }
    else {
        listaItens.push(item)
    }

    listar()
    limpar()

}

function listar() {
    let conteudo = "";
    if (listaItens.length === 0) {
        conteudo = '<td colspan="7">Sem itens úteis né</td>';
    } else {
        listaItens.forEach((item, indice) => {
            conteudo += `
                <tr>
                    <td>${indice}</td>
                    <td>${item.nomeI}</td>
                    <td>${item.qtdI}</td>
                    <td>${item.valorI}</td>
                    <td>${item.fornI}</td>
                    <td><button type"button" onclick= "alterar(${indice})">Alterar</button></td>
                    <td><button type"button" onclick="excluir(${indice})">Excluir</button></td>
                </tr>
            `
        })
    }
    document.getElementById("conteudo").innerHTML = conteudo;
}

function excluir(indice) {
    if (confirm('Deseja excluir?'))
    listaItens.splice(indice, 1);
    listar()
}

function alterar(indice) {
    emAlteracao = true;
    indiceElementoAlteracao = indice
    document.getElementById("nomeitem").value = listaItens[indice].nomeI;
    document.getElementById("qtditem").value = listaItens[indice].qtdI;
    document.getElementById("valoritem").value = listaItens[indice].valorI;
    document.getElementById("fornitem").value = listaItens[indice].fornI;
} 

function limpar() {
    emAlteracao = false;
    document.getElementById('meuForm').reset();
}


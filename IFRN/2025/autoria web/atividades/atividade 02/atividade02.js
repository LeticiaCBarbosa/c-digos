let listaItens = [];

function gravar() {
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

    listaItens.push(item);
    listar()

}

function listar() {
    let conteudo = "";
    if (listaItens.length === 0) {
        conteudo = '<td colspan="7">Sem itens úteis né</td>';
    } else {
        listaItens.forEach((item, indice) => {
            conteudo += `
                <tr>
                    <td>#</td>
                    <td>${item.nomeI}</td>
                    <td>${item.qtdI}</td>
                    <td>${item.valorI}</td>
                    <td>${item.fornI}</td>
                </tr>
            `
        })
    }
    document.getElementById("conteudo").innerHTML = conteudo;
}
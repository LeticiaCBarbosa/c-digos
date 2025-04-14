/*escopo global e local

let cor = "azul" //escopo global, dentro do programa

function mostrarcor() {
    // cor = 'vermelha' (a variavel cor já existe)
    const cor = "vermelha" // escopo local, tem prioridade
    return cor 
}

console.log("Cor dentro da função: ", mostrarcor())
console.log("Cor fora da função: ", cor) // se tiver CONST, imprime azul, se não tiver const imprime vermelha pois está modificando o escopo global*/

function adicionar(X) {
    return function(Y) {
        return X + Y
    }
}

const add = adicionar(5)
console.log(add(10))
console.log(add(2))
console.log(add(20))
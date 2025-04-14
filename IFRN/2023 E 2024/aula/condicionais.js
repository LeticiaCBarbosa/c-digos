/*
em python
idade = 18
if idade >= 18:
print ("Você é maior de idade.)
*/

// em javascript
let idade = 17;
if (idade >= 18) { // é utilizado as chaves em vez dos dois pontos
    console.log ("Você é maior de idade.") 
    console.log ("Já pode ser preso.")
}
console.log("Terminou!")

let hora = 9
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log ("Boa tade!");
} else {
    console.log ("Boa noite!");
}

// operador tenário
let situacao = (idade>= 18) ? "Maior de idade" : "Menor de idade";
console.log(situacao);

let media_final = 55;
situacao = (media_final >= 60) ? "Aprovado" : "Reprovado";
console.log('Média ${media_final}, está ${situacao}');
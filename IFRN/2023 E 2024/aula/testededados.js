/*

let idade = 18;

if (typeof(idade) == "number") {
    if(idade >= 18) console.log('MAIOR');

} else console.log("Pirralho(a)");

*/

//let idade = 18;
//console.log((idade >= 18)) ? "MAIOR" : "PIRRALHO(A)"

let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(total, numero) {
    return total + numero;
}, 0);

console.log(soma); // 15
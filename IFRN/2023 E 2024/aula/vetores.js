/*

let frut = ["Maçã", "Banana", "Laranja"];
console.log(frutas);
console.log(frutas.toString()); // converte cada elemento em uma string separada por virgulas
console.log(frutas.join(", "));

let num = [2, 5, 6, 7, 8, 0, 10, 12];
console.log(numeros);
let compras = ["Maçã", 2, "Banana", 4, "Laranja", 10];
console.log(compras);

*/

const numeros = [2, 3, 7, 8, 10];
console.log(numeros.toString());

const quadrados = numeros.map(function(num) {
    return num ** 2; }); // num é o nome escolhido para representar cada elemento a medida que a função é executada
console.log(quadrados.toString()); // aplica a função em todos os elementos
// return, a função me devolve o resultado de num ao quadrado


let resultado = numeros.filter(function(num) {
    return num > 5; })
console.log(resultado.toString());

resultado = numeros.reduce(function(total, num) { 
    return total + num; }, 0);
console.log(resultado); // total é o acumulador e num representa os elementos da array

const frutas = ["tamarindo", "cajá", "tomate"]
resultado = frutas.filter(function(fruta){
    return fruta.length >= 6});
console.log(resultado.toString());
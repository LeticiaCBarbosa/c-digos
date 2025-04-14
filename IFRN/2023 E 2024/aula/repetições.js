/*
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`)
}
*/
/*
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma = soma + i;
    console.log(`Soma = ${soma}`);
}

i++ = i = i + 1 ou i+ = 1
mesma coisa para i --
*/

console.log('\nTabela-verdade AND');
for(let a = 0; a <= 1; a++) {
    for (let b = 0; b <=1; b ++) {
        console.log(`${a} ${b} | ${a && b}`);
    }
}

console.log('\nTabela-verdade OR');
for (let a=0; a<=1; a++) {
    for (let b=0; b<=1; b++) {
        console.log(`${a}  ${b} | ${a || b}`);
    }
}

/* while */
let num = 0;
while (num < 5) {
    console.log("Número: " + num);
    num++;
}

/* do .. while */
let i = 0;
do {
    console.log("Número: " + i);
    i++;
} while (i < 5);
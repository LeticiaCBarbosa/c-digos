/*

coluna (vertical) = j
linha (horizontal = i 

0 1 2
1
2



*/


const matriza = [
    [5, 8, 3],
    [4, 2, 9],
    [1, 7, 6]];

const matrizb = [
    [1, 3, 8],
    [1, 2, 5],
    [7, 6, 4]];

 
    function somaMatrizes(matriza, matrizb) {
		let resultado = []; //armazenamento da soma
		for (let i = 0; i < matriza.length; i++) {
				resultado[i] = []; // 3

                // resultado = [[6, 11, 11]]


				for (let j = 0; j < matriza[i].length; j++) { //numero de colunas na linha i
						resultado[i][j] = matriza[i][j] + matrizb[i][j]; // calcula a soma e armazena na mesma posição
				}

		}
		return resultado; }
        console.table(somaMatrizes(matriza, matrizb))

   /*

        function transposta(matriz) {
            let transposta = [];
            for (let i = 0; i < matriz[0].length; i++) {
                    transposta[i] = [];
                    for (let j = 0; j < matriz.length; j++) {
                            transposta[i][j] = matriz[j][i];
                    }
            }
            return transposta;}
            console.table(transposta(matriz))
            */
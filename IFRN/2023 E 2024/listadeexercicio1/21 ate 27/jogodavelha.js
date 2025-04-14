let jogador = 'X';
let jogo = [['', '', ''],
            ['', '', ''],
            ['', '', '']];
let gameover = false; // quando gameover é true o jogo deve parar


function marcar(celula, linha, coluna) {
    if (gameover || jogo[linha][coluna]) return; // or, apenas um precisa ser verdadeiro
    // Se gameover for true, o jogo termina. Se a célula especificada
    // não estiver vazia a função retorna sem fazer alterações


    celula.textContent = jogador; // mostra a marca do jogador na celula
    jogo[linha][coluna] = jogador; // atualiza o estado do jogo interno


    if (checarvitoria(jogador)) {
        document.getElementById('resultado').textContent = 'Jogador ' + jogador + ' venceu!';
        gameover = true;
        return;
    }

    if(checarempate()) {
        document.getElementById('resultado').textContent = 'Empate!';
        gameover = true;
        return;
    }

    jogador = jogador === 'X' ? 'O' : 'X';
    // CONDIÇÃO | VALOR SE VERDADEIRO : VALOR SE FALSO    
}


//primeiro linha segunda coluna
function checarvitoria(jog){
    for (let i = 0; i < 3; i ++) {
        if (jogo[i][0] === jog && jogo[i][1] === jog && jogo [i][2] === jog) 
        return true; }
        // verifica as linhas da matriz, então i percorre de 0 a 2, começando pela linha 0
        // se o indice da linha 0 na coluna 0 for igual a jog (valor do jogador)
        // se os tres forem igual a jog, a vitória é true

    for (let i = 0; i < 3; i++) {
            if (jogo[0][i] === jog &&  jogo[1][i] === jog && jogo [2][i] === jog)
                return true; }


        if (jogo[0][0] === jog && jogo[1][1] === jog && jogo[2][2] === jog)
        return true;


        if (jogo[0][2] === jog && jogo[1][1] === jog && jogo[2][0] === jog)
        return true;
       
        return false;
}

function checarempate() {
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j ++) {
            if (jogo [i][j] === '') {
                return false // celulas vazias
            }
        }
    }
    return true // todas as celulas preenchidas
}

function resetar() {
    window.location.reload()
}

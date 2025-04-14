function palavrinhas() {
    let c = document.getElementById('frase').value.toLowerCase()
    let a = document.getElementById("pal1").value.toLowerCase()
    let b = document.getElementById("pal2").value.toLowerCase()

    if (c === '' && a === '' && b === '') {
        document.getElementById('resultado').innerHTML = 'Preencha todos os campos.';
        return;}

    let novafrase = c.split(' ');
        for (let i = 0; i < novafrase.length; i++){ // i = indice
            if (novafrase[i] == a) {
                novafrase[i] = b 
            } 
        }

            
    let nova = novafrase.join(' ')
    document.getElementById('resultado').innerHTML = 
     `${nova}` 

    }

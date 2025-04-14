function oscar() { // chamando função

const ano = document.getElementById('ano').value  // pega valor escolhido
const url = 'https://api.nobelprize.org/v1/prize.json'

fetch (url) // "capturar" o json
    .then (response => response.json()) // json em javascript
    .then (data => mostrarganhadores(data, ano)) //parametro para as info da API e as info do ano escolhido
	};


	function mostrarganhadores(data, ano) { // função utilizando essas informações
        const Lista = document.getElementById('lista');
        Lista.innerHTML = ''; // Limpa a lista anterior

        const premiosano = data.prizes.filter(prize => prize.year === ano);
        // na api temos a array prize, e aqui verificamos se o "year" da array é igual ao ano (numero escolhido). A variavel armazena a informação

        if (premiosano.length === 0) { // verifica se a array esta vazia
            Lista.innerHTML = `<p>Nenhum prêmio encontrado para o ano "${ano}".</p>`;
            return;
        }

        premiosano.forEach(premio => { // para cada premio encontrado naquele ano, crie uma DIV
            const ElementoAno = document.createElement('div');

            // Exibe a categoria do prêmio
            const categoriaM = premio.category.charAt(0).toUpperCase() + premio.category.slice(1);
            //transformamos o index 0 em maisculo, depois retornamos a palavra a partir do segundo caracterem, e por fim juntamos ambos
            //exemplo: quimica --> q --> Q --> uimica --> Quimica
            ElementoAno.innerHTML = `<h3>Categoria: ${categoriaM}</h3>`; // exemplo: categoria de quimica
            
            // Exibe os vencedores e suas motivações
            premio.laureates.forEach(laureate => {
                ElementoAno.innerHTML += `
                    <p>
                        Vencedor: ${laureate.firstname} ${laureate.surname}<br>
                        Motivação: ${laureate.motivation}
                    </p>
                `;
            });

            Lista.appendChild(ElementoAno); // Adiciona o elemento à lista
        });
    }

function resultado() { // botão chama a função resultado
    const url = `https://worldcupjson.net/matches`


    fetch (url) // requisição de dados da url
    .then (response => response.json()) // converte para json 
    .then (data => showfinal(data.at(-1))) // coloca as informações da última partida na função showfinal
    .catch(error => console.error('Erro ao buscar dados:', error)); // trata erros 

}
    function showfinal(match) {
        const ListaPost = document.getElementById('listapost') // elemento onde os dados são exibidos no html e vericação que está limpo
        ListaPost.innerHTML = ''

        const datetime = new Date(match.datetime) // converte a string para um objeto date (objeto que guarda as informações de uma data)

        const post = document.createElement('div') // criação de div para inserir os detalhes da partida
        post.className = 'post' // foi criada uma formatação padrão para todos os posts no HTML, e com o classname é possivel que todos os elementos post fiquem com esse design. 

        // define o conteudo do html na div criada
        post.innerHTML = `
        <h2>Campeão: ${match.winner}</h2> <!-- Exibe o campeão -->
        <h2> Vice Campeão: ${match.away_team.name}</h2> <!-- Exibe o vice campeão -->
        <h3>Detalhes da Última Partida:</h3> 
        <p>Data: ${datetime.toLocaleDateString()}</p> <!-- Exibe a data da partida -->
        <p>Hora: ${datetime.toLocaleTimeString()}</p> <!-- Exibe o horário da partida -->
        <p>Localização: Estádio ${match.venue} em ${match.location}</p><br> <!-- Exibe a localização da partida -->
        <h3>Gols e Penalidades:</h3>
                <table> <!-- Inicio da tabela -->
                    <caption>Resumo dos Times</caption> <!-- Titulo da tabela -->
                    <thead> <!-- Cabeçalho da tabela -->
                        <tr>
                            <th>Equipe</th> <!-- Coluna -->
                            <th>Gols</th>
                            <th>Penalidades</th>
                        </tr> <!-- Linha -->
                    </thead>
                    <tbody> <!-- Corpo da tabela -->
                        <tr>
                            <td><img src= "https://flagpedia.net/data/flags/h80/ar.png" alt="${match.home_team.country}" class="flag"> ${match.home_team.name}</td>
                            <td>${match.home_team.goals}</td> <!-- Conteúdo do elemento da coluna (célula) -->
                            <td>${match.home_team.penalties}</td>
                        </tr>
                        <tr>
                            <td><img src="https://flagpedia.net/data/flags/h80/fr.png" alt="${match.away_team.country}" class="flag"> ${match.away_team.name}</td>
                            <td>${match.away_team.goals}</td>
                            <td>${match.away_team.penalties}</td>
                        </tr>
                        <tr>
                            <td><b>Resultado Final</b></td>
                            <td>${match.home_team.goals} - ${match.away_team.goals}</td>
                            <td>${match.home_team.penalties} - ${match.away_team.penalties}</td>
                        </tr>
                    </tbody> <!-- Finaliza o corpo da tabela -->
                </table> <!-- Finaliza a tabela -->
        <p>Público: ${match.attendance} pessoas</p>
        `

        ListaPost.appendChild(post); // Adiciona a div com a classe 'post' e seu conteúdo ao elemento ListaPost
        }

// recebendo dados

const url = 'https://jsonplaceholder.typicode.com/posts'

fetch (url) // "capturar" o json
    .then (response => response.json()) // json em javascript
    .then (data => mostrarUsers(data))
	.catch(error => {
		const ListaPost = document.getElementById('listapost')
		ListaPost.innerHTML = `<div class="error"> Ocorreu um erro: ${error.message}</div>`
	});

	function mostrarUsers(posts) { //parametro da função
		const ListaPost = document.getElementById('listapost');
		ListaPost.innerHTML = ''

		posts.forEach(post => {
			const ElementoPost = document.createElement('div')

			ElementoPost.className = 'post'
			
			ElementoPost.innerHTML = `
				<p>Id: ${post.id}</p>
				<p>Title: ${post.title}</p>
				<p>Body: ${post.body}</p>`;

			ListaPost.appendChild(ElementoPost);
							
		})

	}
		
    // response.json -> quando não tem uma string jason
    // json.parse -> quando tem uma string json 
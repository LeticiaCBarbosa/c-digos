const url = 'https://jsonplaceholder.typicode.com/posts'

fetch (url) // "capturar" o json
    .then (response => response.json()) // json em javascript
    .then (data => {
       
		data.forEach(user => {
			console.log('ID:', user.id);
			console.log('Título:', user.title);
            console.log('Texto:', user.body);
			console.log('---');
		});
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});
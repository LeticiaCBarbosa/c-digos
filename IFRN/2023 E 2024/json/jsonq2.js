function comentarios() {
    const id = document.getElementById("coment").value 
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    
    fetch (url)
    .then (response => response.json())
    .then (data => showcomentarios(data))
}

    function showcomentarios(coments){
        const ListaPost = document.getElementById('listapost')
        ListaPost.innerHTML = ''
            
            coments.forEach(coment => {
                const elpost = document.createElement('div')
                elpost.className = 'post'
                elpost.innerHTML = `
                    <p>Id: ${coment.id}</p>
				    <p>Titulo: ${coment.name}</p>
				    <p>Comentario: ${coment.body}</p>
                    <h1>-------------</h1>`

                    ListaPost.appendChild(elpost)
            })

            
        }

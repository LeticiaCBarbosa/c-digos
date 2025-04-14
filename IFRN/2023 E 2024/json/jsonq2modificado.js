const urlp = 'https://jsonplaceholder.typicode.com/posts'
    
fetch (urlp)
    .then (response => response.json())
    .then (p => osposts(p))

function osposts(p) {
    let select = document.getElementById('posts')
    p.forEach (post => {
        let option = new Option(post.title, post.id)
        select.options[select.options.length] = option
    })
}

function showcomentarios() {
    const id = document.getElementById("posts").value 
    const urlc = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    
    fetch (urlc)
    .then (response => response.json())
    .then (c => {
        const ListaPost = document.getElementById('listapost')
        ListaPost.innerHTML = ''
        c.forEach(coment => {
            const elpost = document.createElement('div')
            elpost.innerHTML = `
                <p>Id: ${coment.id}</p>
				<p>Titulo: ${coment.name}</p>
				<p>Comentario: ${coment.body}</p>
                <h1>-------------</h1>`
                ListaPost.appendChild(elpost)
            })

    })
}

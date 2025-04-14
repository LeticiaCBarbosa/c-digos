function af() {
    const ida = document.getElementById('album').value 
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${ida}`
    fetch (url)
    .then (response => response.json())
    .then (data => showfotos(data))
}

function showfotos(fotos){
    const listona = document.getElementById("listona") 
    listona.innerHTML = ""

    fotos.forEach(foto => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const titulo = document.createElement('p');

        img.src = foto.thumbnailUrl;
        img.alt = foto.title;
        titulo.textContent = foto.title;

        div.appendChild(img);
        div.appendChild(titulo);
        listona.appendChild(div);
    })
}
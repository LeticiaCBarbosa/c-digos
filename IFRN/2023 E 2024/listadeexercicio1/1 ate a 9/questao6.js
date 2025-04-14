function cor() {
    let text = document.getElementById('texto')
    let parteum = Math.random() * 255
    let partedois = Math.random() * 255
    let partetres = Math.random() * 255

    let aleatorio = 'rgb(' + parteum + ',' + partedois + ',' + partetres + ')' 

    text.style.color = aleatorio;
}
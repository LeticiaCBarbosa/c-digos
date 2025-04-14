function dist() {

    x1 = document.getElementById("x1").value 
    y1 = document.getElementById("y1").value 
    x2 = document.getElementById("x2").value 
    y2 = document.getElementById("y2").value 

    calculo = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))

    document.getElementById('resultado').innerHTML =
    "A distância desses dois pontos é de " + calculo.toFixed(2)
}
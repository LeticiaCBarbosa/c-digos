function pe() {
    n = document.getElementById("email").value 
    if (n.includes ("@") && n.includes (".") )
    alert ("Email validado")
    else
    alert("Email não válido")
}
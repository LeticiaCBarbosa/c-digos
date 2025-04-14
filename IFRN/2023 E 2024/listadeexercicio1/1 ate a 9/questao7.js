function pe() {
    n = document.getElementById("email").value 
    a = document.getElementById("senha").value

    if (n.includes ("@") && n.includes (".") )
    
    {
        if (a.length >= 6) {alert ("Cadastro validado")}
        else
        {alert("A senha precisa ter ao menos 6 caracteres")}

    }

    else {alert("Email não válido")}
}
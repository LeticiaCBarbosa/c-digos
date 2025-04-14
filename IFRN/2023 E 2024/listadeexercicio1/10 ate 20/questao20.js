function cadast() {
    let nome = document.getElementById('nm').value.trim();
    let email = document.getElementById('em').value.trim();
    let telefone = document.getElementById('tele').value.trim();
    let senha = document.getElementById('sen').value.trim()                                                                                                                                                                        
    let confirmacao = document.getElementById('confse').value.trim()

    let regex = /^(?=.*[a-zA-Z\d]).{8,}$/;

    if (!nome) {
        alert('PREENCHA O NOME') }
    else if (!email) {
        alert('PREENCHA O EMAIL') }
    else if (!telefone) {
        alert('PREENCHA O TELEFONE') }
    else if (!senha) {
        alert('PREENCHA A SENHA') }
    else if (!confirmacao) {
        alert("CONFIRME A SENHA") }
    else if (senha != confirmacao) {
        alert("SENHA DIVERGENTE") }
    else if (!email.includes('@') || !email.includes('.')) {
        alert("EMAIL INVALIDO") }
    else if (!regex.test(senha)) {
        alert("SENHA INVALIDA") }
    else {
        alert("CADASTRO REALIZADO COM SUCESSO"); } }
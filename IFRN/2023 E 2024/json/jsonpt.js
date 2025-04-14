// enviando dados

const dados = { // objeto
	usuario: "Maria",
	senha: "12345"
};

const jsonString = JSON.stringify(dados); // string json

fetch('https://api.exemplo.com/login', { // o json vai ser enviado para esse url
	method: 'POST',
	headers: { 'Content-Type': 'application/json'	},
	body: jsonString
})
.then(response => response.json())
.then(data => console.log(data));
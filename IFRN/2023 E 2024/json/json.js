const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
	saudacao: function() {
		return `Olá, meu nome é ${this.nome}, tenho 
        ${this.idade} anos e sou ${this.profissao}`;
	}
};

console.log(pessoa.nome); // João
console.log(pessoa.saudacao()); // Olá, meu nome é João


/* class NomeDaClasse {
    atributo1: Tipo;
    atributo2: Tipo;

    constructor(atributo1: Tipo, atributo2: Tipo) {
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
    }

    metodoExemplo(): TipoDeRetorno {
        // Lógica do método
    }
} */

    class Pessoa {

        //atributos  
        nome: string; //declaração explicita
        idade: number;
    
        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;

        //O construtor é uma função executada quando criamos uma nova instância da classe Pessoa. 
        //Ele aceita dois parâmetros (nome e idade), e os atribui à this.nome e this.idade

        }
    
        saudacao(): string { //metodo da classe
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }
    
    const pessoa1 = new Pessoa("João", 30);
    console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é João e tenho 30 anos.

//Aqui, criamos uma nova instância da classe Pessoa chamada pessoa1, passando "João" e 30 como argumentos. 
// Depois, chamamos o método saudacao dessa instância (saudacao.instancia) e imprimimos o resultado.
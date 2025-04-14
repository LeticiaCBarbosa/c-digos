class Livro1 {
    private titulo: string;
    private autor: string;
    private preco: number;

    constructor(titulo: string, autor: string, preco: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
    }

    descricao(): string {
        return `O livro ${this.titulo} foi escrito por ${this.autor} e custa ${this.preco}`
    }

}

const livro1 = new Livro1("Metamorfose", "Franz Kafka", 20);
console.log(livro1.descricao()); 

class Livro2 {
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(titulo: string, autor: string, preco: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }

    get titulo(): string {
        return this._titulo;
    }

    get autor(): string {
        return this._autor;
    }

    get preco(): number {
        return this._preco;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    set autor(value: string) {
        this._autor = value;
    }

    set preco(value: number){
        if (value < 0) {
            throw new Error("Preço inválido");
        }
        this._preco = value;
    }

    descricao(): string {
        return `O livro ${this.titulo} foi escrito por ${this.autor} e custa ${this.preco}`
    }

}

const livro2 = new Livro2("Metamorfose", "Franz Kafka", 20);
console.log(livro2.descricao()); 

livro2.titulo = "A Metamorfose";
livro2.autor = "Kafka";
livro2.preco = 25;

console.log(livro2.descricao());

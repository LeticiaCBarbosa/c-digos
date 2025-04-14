export class Livro3 {
    // atributos, isso que é um livro para ele
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(titulo: string, autor: string, preco: number){ 
        // pega os valores das instancias e coloca nos atributo para inicializar com um valor
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;

        //O constructor transforma as instancias em livros para a classe
    }

    get titulo(): string { //titulo é o nome da função get
        return this._titulo; //possibilita o uso do console.log
    }

    set titulo(value: string) { //definir um valor
        this._titulo = value; //possibilita a mudança de valor
    }

    get autor(): string {
        return this._autor
    }

    set autor(value: string) {
        this._autor = value
    }

    get preco(): number {
        return this._preco;
    }

    set preco(value: number) {
        if (value < 0) {
            throw new Error("PREÇO INVÁLIDO")
        }
        this._preco = value
    }

    descricao(): string { //todo metodo é uma função
        return `O livro $(this._titulo) foi escrito por $(this._autor) e custa $(this._preco) reais.`
    }
}
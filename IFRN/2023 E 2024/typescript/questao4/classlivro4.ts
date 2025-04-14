export class Livro4 {
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(titulo: string, autor: string, preco: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;

    }

    get titulo(): string {
        return this._titulo
    }

    set titulo(value: string){
        this._titulo = value
    }

    get autor(): string {
        return this._autor
    }

    set autor(value: string){
        this._autor = value
    }
    get preco(): number {
        return this._preco
    }

    set preco(value: number){
        if (value < 0) {
            throw new Error ("PREÇO INVÁLIDO");
        }
        else {
        this._preco = value
        }
    }

    descricao(): string {
        return `${this.titulo} - ${this.autor}, ${this.preco} reais`
    }
}


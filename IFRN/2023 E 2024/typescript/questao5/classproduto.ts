export class Produto {
    private _nome: string;
    private _preco: number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;

    }

    get nome(): string {
        return this._nome
    }

    set nome(value: string){
        this._nome = value
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
        return `${this.nome} - ${this.preco} reais`
    }
}


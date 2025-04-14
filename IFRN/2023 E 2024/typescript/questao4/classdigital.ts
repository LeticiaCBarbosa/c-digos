import { Livro4 } from "./classlivro4";

export class LivroDigital extends Livro4 {
    formato: string;

    constructor(titulo: string, autor: string, preco: number, formato: string) {
        super(titulo, autor, preco); // chama o construtor da classe pai
        this.formato = formato;
    }

    descricao(): string {
        return `${super.descricao()} - Formato: ${this.formato}`;
    }
}
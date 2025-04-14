import { Livro3 } from './classlivro3'
export class Biblioteca {
    private livros: Livro3[] = []; //livros é uma lista de objetos criadas na classe Livro3

    adicionarLivro(livro: Livro3): void {
        this.livros.push(livro)
    }

    ListarLivros(): void {
        console.log("Livros disponíveis na biblioteca: ");
        if (this.livros.length === 0) {
            console.log("Nenhum livro disponível.");
        } else
        this.livros.forEach(livro => {
            console.log(`- ${livro.descricao()}`);
        })
    }
}
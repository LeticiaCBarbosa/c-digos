import { Livro4 }  from "./classlivro4";
export class Biblioteca {
    private livros: Livro4[] = []

    AdicionarLivro(livro: Livro4): void {
        this.livros.push(livro)
    }
    ListarLivros(): void {
        console.log ("BIBLIOTECA ATUAL");
        if (this.livros.length === 0) {
            console.log("NENHUM LIVRO DISPONÍVEL")
        }
        else {
            this.livros.forEach(livro => {
                console.log(`-${livro.descricao()}`)
            }
                )
        }

    }

}
import { Filme } from "./filme";
export class Catalogo {
    private filmes: Filme[] = [];

    constructor(filmes? : Filme[]) {
        if (filmes) {
            filmes.forEach(filme => {
                this.filmes.push(filme);
            });     
        }   
    }

    adicionarFilme(filme: Filme) : void {
        this.filmes.push(filme);
        console.log("Filme adicionado.");
    }

    adicionarFilmes(vetor: Filme[]) : void {
        vetor.forEach(filme => {
            this.filmes.push(filme);
        });        
        console.log("Filmes adicionado.");
    }

    listarFilmes() : void {
        console.log("LISTAGEM DOS FILMES:");
        this.filmes.forEach(livro => {
            console.log("- " + livro.descricao());
        });
    }
}
import { Filme } from "./filme";
import { Catalogo } from "./catalogo";

function filtrarFilmesPorAno(filmes: Filme[], anoLancamento: number): void {
    filmes.forEach(filme) =>
    filme.descricao();}


let filme1 = new Filme("A Origem", "Christopher Nolan", 2010, 5);
let filme2 = new Filme("Interestelar", "Christopher Nolan", 2014, 5);
let filme3 = new Filme( "Matrix", "Lana e Lilly Wachowski", 1999, 5);
let filme4 = new Filme("Pulp Fiction: Tempo de Violência", "Quentin Tarantino", 1994, 5);
let filme5 = new Filme("Duna", "Denis Villeneuve", 2021, 5)

let vetor : Filme[] = [filme1, filme2, filme3, filme4, filme5];
let estante = new Catalogo(vetor);
estante.listarFilmes();
import { Biblioteca } from "./classbiblioteca";
import { Livro4 } from "./classlivro4";
import { LivroDigital } from "./classdigital";

const estante = new Biblioteca();

const livro4i1 = new Livro4("Metamorfose", "Franz Kafka", 20);
const livro4i2 = new Livro4("1984", "George Orwell", 25);
const livro4i3 = new Livro4("O Processo", "Franz Kafka", 30);

estante.AdicionarLivro(livro4i1);
estante.AdicionarLivro(livro4i2);  
estante.AdicionarLivro(livro4i3);

estante.ListarLivros()

let ebook = new LivroDigital("1984", "George Orwell", 25, "PDF");
estante.AdicionarLivro(ebook)
estante.ListarLivros()




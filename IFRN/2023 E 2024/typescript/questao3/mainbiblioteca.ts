import { Livro3 } from "./classlivro3";
import { Biblioteca } from "./biblioteca";

const biblioteca = new Biblioteca();

const livro3i1 = new Livro3("Metamorfose", "Franz Kafka", 20);
const livro3i2 = new Livro3("1984", "George Orwell", 25);
const livro3i3 = new Livro3("O Senhor dos Anéis", "J.R.R. Tolkien", 30);

livro3i1.titulo = "COMUNISMO JUMPSCARE";

biblioteca.adicionarLivro(livro3i1);
biblioteca.adicionarLivro(livro3i2);
biblioteca.adicionarLivro(livro3i3);

biblioteca.ListarLivros();

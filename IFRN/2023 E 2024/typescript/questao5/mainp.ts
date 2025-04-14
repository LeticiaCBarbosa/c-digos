import { Produto } from "./classproduto";
import { Carrinho } from "./classcarrinho";

const p1 = new Produto("Sabao", 20);
const p2 = new Produto("Arroz", 25);
const p3 = new Produto("Azeite", 30);

let vetor : Produto[] = [p1, p2, p3];
let carrinho = new Carrinho(vetor);
carrinho.ListarProdutos();




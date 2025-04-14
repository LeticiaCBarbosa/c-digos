import { Funcionario } from "./funcionario";
import { Empresa } from "./empresa";
import { Gerente } from "./gerente";

let fun1 = new Funcionario("Ryan", "Chefe", 2);
let fun2 = new Funcionario("Lucas", "Subordinado", 1);
let fun3 = new Funcionario("Alice", "Contadora", 100);

let vetor : Funcionario[] = [fun1, fun2, fun3];
let lista = new Empresa(vetor);
lista.listarFuncionarios();

let gerente = new Gerente("Helloyza", "Gerente", 2, 500);
lista.adicionarFuncionario(gerente);
lista.listarFuncionarios();
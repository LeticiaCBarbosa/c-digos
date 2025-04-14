import { Funcionario } from "./funcionario";
export class Empresa {
    private funcionarios: Funcionario[] = []

    constructor(funcionarios? : Funcionario[]) {
        if (funcionarios) {
            funcionarios.forEach(funcionario => {
                this.funcionarios.push(funcionario);
            });     
        }   
    }
    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log(`Funcionario adicionado: ${funcionario.descricao()}`);
}

    adicionaFuncionarios(vetor: Funcionario[]) : void {
    vetor.forEach(funcionario => {
        this.funcionarios.push(funcionario);
    });        
    console.log("Funcionarios adicionado.");
}

    listarFuncionarios() : void {
        console.log("FUNCIONARIOS ATUAIS:");
        this.funcionarios.forEach(funcionario => {
        console.log("- " + funcionario.descricao());
    
        })}

}
import { Funcionario } from "./funcionario";
export class Gerente extends Funcionario {
    private _bonus: number

    constructor(nome: string, cargo: string, salario: number, bonus: number) {
        super(nome, cargo, salario); // chama o construtor da classe pai
        this._bonus = bonus;
    }

    descricao() : string {
        return `${super.descricao()} # Bonus: ${this._bonus}`;
}

}
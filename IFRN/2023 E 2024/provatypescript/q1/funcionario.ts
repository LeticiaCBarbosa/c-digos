export class Funcionario {
    private _nome: string;
    private _cargo: string;
    private _salario: number;

    constructor(nome: string, cargo: string, salario: number){
        this._nome = nome
        this._cargo = cargo
        this._salario = salario

    }

    get nome(): string { 
        return this._nome; 
    }

    set titulo(value: string) {
        this._nome = value;
    }

    get cargo(): string {
        return this._cargo
    }

    set cargo(value: string) {
        this._cargo = value
    }

    get salario(): number {
        return this._salario;
    }

    set salario(value: number) {
        if (value < 0) {
            throw new Error("SALARIO INVÁLIDO")
        }
        this._salario = value
    }

    aplicarAumento(novo_salario : number) : void {
        if (novo_salario >= 0)
            this._salario = novo_salario;
        else 
            console.log("Não permitido valor negativo!");
        }

    descricao(): string {
        return `${this._nome} - ${this._cargo} Salário: R$ ${this.salario.toFixed(2)}`
    }
}
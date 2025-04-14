export class Filme {
    private _titulo: string;
    private _diretor: string;
    private _anoLancamento: number;
    _avaliacoes: number[]

    constructor(titulo : string, diretor : string, anoLancamento : number, avaliacoes : number[]) {
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
        this._avaliacoes = avaliacoes
    }

        get titulo(): string { 
            return this._titulo; 
        }
    
        set titulo(value: string) {
            this._titulo = value;
        }
    
        get diretor(): string {
            return this._diretor
        }
    
        set diretor(value: string) {
            this._diretor = value
        }
    
        get anoLancamento(): number {
            return this._anoLancamento;
        }
    
        set anoLancamento(value: number) {
            if (value < 0) {
                throw new Error("ANO INVÁLIDO")
            }
            this._anoLancamento = value
        }

        adicionarAvaliacao(nota: number) : void {
            if (nota >= 1 && nota <=5) {
            this._avaliacoes.push(nota); }
            else {
            console.log("Avaliacao adicionada.") }
    } 
    descricao(): string {
        return `${this._titulo} - ${this.diretor}, ${this._anoLancamento}`
} 

}
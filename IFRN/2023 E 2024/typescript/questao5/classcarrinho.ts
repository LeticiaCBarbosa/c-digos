import { Produto } from "./classproduto";
export class Carrinho {
    private produtos: Produto[] = []

    AdicionarProduto(produto: Produto): void {
        this.produtos.push(produto)
    }
    ListarProdutos(): void {
        console.log ("CARRINHO ATUAL");
        if (this.produtos.length === 0) {
            console.log("NENHUM PRODUTO DISPONÍVEL")
        }
        else {
            this.produtos.forEach(produto => {
                console.log(`-${produto.descricao()}`)
            }
                )
        }

    }

}
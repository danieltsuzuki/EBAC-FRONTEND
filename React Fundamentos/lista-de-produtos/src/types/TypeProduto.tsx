export type TypeProduto = {
    id: number,
    nome: string,
    preco: number,
    descricao: string,
    imagem: string
}

export type TypeProdutoSemId = {
    nome: string,
    preco: number,
    descricao: string,
    imagem: string
}

export type TypeFormularioProdutoProps = {
    handlerAdicionarProduto: (produto: TypeProdutoSemId) => void;
}

export type TypeProdutoProps = {
    produto: TypeProduto,
    handlerDeletarProduto: (id: number) => void;
}
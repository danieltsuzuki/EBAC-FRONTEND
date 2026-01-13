import { memo } from "react";
import type { TypeProdutoProps } from "../../../types/TypeProduto";

function Produto({ produto, handlerDeletarProduto }: TypeProdutoProps) {

    function removerProduto() {
        handlerDeletarProduto(produto.id);
    }

    return (
        <div className="relative  border rounded-3xl box-border h-96">
            <span className='border rounded-full text-center bg-red-500 font-bold size-8 box-border p-1 mt-1 mr-1 absolute top-0 right-0' onClick={removerProduto}>X</span>
            <div className='flex flex-col items-center justify-center box-border'>
                <img className='max-w-48 min-w-48 aspect-4/3' src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
            </div>
            <p className="text-orange-600"><strong>{produto.nome}</strong></p>
            <span className='block mb-8 mx-2'>{produto.descricao}</span>
            <span className='text-green-500 font-bold block'>R$ {produto.preco.toFixed(2)}</span>
        </div>
    );
}

export default memo(Produto);
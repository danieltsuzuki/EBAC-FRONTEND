import './Produto.css';

function Product({ produto, handlerDeleteProduct }) {

    function removeProduct() {
        handlerDeleteProduct(produto);
    }

    return (
        <>
            <div className="card flex">
                <div className='flex-column'>
                    <div className='div-buttom-remove'>
                        <span className='buttom-remove' onClick={removeProduct}>X</span>
                    </div>
                    <img className='w-200' src={produto.imagem} alt="" />
                    <p className="font-card--product text-orange"><strong>{produto.nome}</strong></p>
                    <span className='display-block mb-8'>{produto.descricao}</span>
                    <hr className='w-full'/>
                    <span className='display-block text-green font-bold'>R$ {Number(produto.preco).toFixed(2)}</span>
                </div>
            </div>
        </>
    );
}

export default Product;
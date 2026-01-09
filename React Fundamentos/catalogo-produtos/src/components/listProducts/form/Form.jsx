import { useState } from "react";
import IMAGEM from '../../../assets/img/sem-imagem.jpg'

function Form({ handlerAddProduct }) {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (imagem.length === 0) {
            handlerAddProduct({ nome, preco, imagem: IMAGEM, descricao });
            cleanUseStates();
            return;
        }

        handlerAddProduct({ nome, preco, imagem, descricao });
        cleanUseStates();
    }

    const cleanUseStates = () => {
        setNome('');
        setPreco(0);
        setDescricao('');
    }

    function validateNome() {
        const nomeProduto = document.getElementById('nomeProduto');
        nomeProduto.className = nomeProduto.className + " display-block"
        console.log(nomeProduto);
    }

    return (
        <form className="card flex-column form mx-auto py-40px mt-40" onSubmit={handleSubmit}>
            <label htmlFor="nomeProduto">Nome</label>
            <input className="input" type="text" onChange={(e) => setNome(e.target.value)} id="nomeProduto" value={nome} />

            <label htmlFor="precoProduto">Preço</label>
            <input className="input" type="text" onChange={(e) => setPreco(e.target.value)} id="precoProduto" value={preco} />

            <label htmlFor="linkImagem">Imagem - link</label>
            <input className="input" type="text" id="linkImagem" onChange={(e) => setImagem(e.target.value)} value={imagem} />

            <label htmlFor="descricaoProduto">Descrição</label>
            <textarea className="input" onChange={(e) => setDescricao(e.target.value)} id="descricaoProduto" value={descricao} />

            <button className="buttonForm" type="submit">Cadastrar</button>
        </form>
    );
}

export default Form

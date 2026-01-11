import { useState, type FormEvent } from "react";
import IMAGEM from '../../../assets/img/sem-imagem.jpg'
import type { TypeFormularioProdutoProps } from "../../../types/TypeProduto";


function FormularioProduto({ handlerAdicionarProduto }: TypeFormularioProdutoProps) {

    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>('');
    const [imagem, setImagem] = useState<string>('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const ok = validarFormulario();
        if (!ok) return;

        if (imagem.length === 0) {
            handlerAdicionarProduto({nome: nome, preco: preco, imagem: IMAGEM, descricao: descricao });
            limparUseStates();
            return;
        }

        handlerAdicionarProduto({ nome, preco, imagem, descricao });
        limparUseStates();
    }

    const limparUseStates = () => {
        setNome('');
        setPreco(0);
        setDescricao('');
    }

    function mostrarErro(id: string, mensagem: string) {
        const elemento = document.getElementById(id) as HTMLSpanElement | null;
        if (!elemento) return;

        elemento.classList.remove("hidden");
        elemento.classList.add("block");
        elemento.textContent = mensagem;

        setTimeout(() => {
            elemento.classList.remove("block");
            elemento.classList.add("hidden");
            elemento.textContent = "";
        }, 2000);
    }

    function validarFormulario(): boolean {
        let valido = true;

        if (nome.trim().length === 0) {
            mostrarErro("nomeProdutoError", "Nome obrigatório");
            valido = false;
        }

        if (Number.isNaN(preco) || preco <= 0) {
            mostrarErro("precoProdutoError", "Preço não pode ser menor ou igual a 0");
            valido = false;
        }

        if (descricao.trim().length === 0) {
            mostrarErro("descricaoProdutoError", "Descrição obrigatória");
            valido = false;
        }

        return valido;
    }


    return (
        <form className="border rounded-xl max-w-2/3 mx-auto py-5 px-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="nomeProduto">Nome</label>
                <input className="border col-span-2 ps-1" type="text" onChange={(e) => setNome(e.target.value)} id="nomeProduto" value={nome} />
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="nomeProdutoError"></span>
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="precoProduto">Preço</label>
                <input className="border col-span-2  ps-1" type="text" onChange={(e) => setPreco(Number(e.target.value))} id="precoProduto" value={preco} />
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="precoProdutoError"></span>
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="linkImagem">Imagem - link</label>
                <input className="border col-span-2 ps-1" type="text" id="linkImagem" onChange={(e) => setImagem(e.target.value)} value={imagem} />
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="descricaoProduto">Descrição</label>
                <textarea className="border col-span-2 resize-none ps-1" onChange={(e) => setDescricao(e.target.value)} id="descricaoProduto" value={descricao} />
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="descricaoProdutoError"></span>
            </div>

            <button className="rounded-xl shadow-md shadow-green-800 py-1 px-4 font-bold bg-green-400 hover:bg-green-700 my-2" type="submit">Cadastrar</button>
        </form>
    );
}

export default FormularioProduto;
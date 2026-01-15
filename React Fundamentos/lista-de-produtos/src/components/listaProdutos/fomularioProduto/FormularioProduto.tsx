import { memo, useEffect, useRef, type FormEvent } from "react";
import IMAGEM from '../../../assets/img/sem-imagem.jpg'
import type { TypeFormularioProdutoProps } from "../../../types/TypeProduto";
import { useInput } from "../../../hooks/useInput";


function FormularioProduto({ handlerAdicionarProduto }: TypeFormularioProdutoProps) {

    const nome = useInput("");
    const preco = useInput("");
    const descricao = useInput("");
    const imagem = useInput("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const ok = validarFormulario();
        if (!ok) return;

        handlerAdicionarProduto({ nome: nome.valor, preco: Number(preco.valor), imagem: imagem.valor, descricao: descricao.valor });
        limparInputs();
    }

    const limparInputs = () => {
        nome.limpar();
        preco.limpar();
        descricao.limpar();
        imagem.limpar()
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

        if (nome.valor?.trim().length === 0) {
            mostrarErro("nomeProdutoError", "Nome obrigatório");
            valido = false;
            nome.limpar()
        }

        if (Number.isNaN(Number(preco.valor))) {
            mostrarErro("precoProdutoError", "Preço inválido");
            valido = false;
            preco.limpar()
        }

        if (Number(preco.valor) <= 0) {
            mostrarErro("precoProdutoError", "Preço não pode ser menor ou igual a 0");
            valido = false;
        }

        if (descricao.valor?.trim().length === 0) {
            mostrarErro("descricaoProdutoError", "Descrição obrigatória");
            valido = false;
            descricao.limpar()
        }

        if (imagem.valor?.trim().length === 0) {
            imagem.valor = IMAGEM;
        }

        return valido;
    }

    
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormFocus = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        handleFormFocus();
    }, []);

    return (
        <form className="border rounded-xl max-w-2/3 mx-auto py-5 px-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="nomeProduto">Nome</label>
                <input className="border col-span-2 ps-1" type="text" onChange={nome.onChange} 
                id="nomeProduto" value={nome.valor}/>
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="nomeProdutoError"></span>
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="precoProduto">Preço</label>
                <input className="border col-span-2  ps-1" type="text" onChange={preco.onChange} 
                id="precoProduto" value={preco.valor}/>
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="precoProdutoError"></span>
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="linkImagem">Imagem - link</label>
                <input className="border col-span-2 ps-1" type="text" id="linkImagem" onChange={imagem.onChange} 
                value={imagem.valor}/>
            </div>

            <div className="grid grid-cols-3 my-2 px-2">
                <label htmlFor="descricaoProduto">Descrição</label>
                <textarea className="border col-span-2 resize-none ps-1" onChange={descricao.onChange} 
                id="descricaoProduto" value={descricao.valor}/>
            </div>
            <div className="grid grid-cols-3 my-2 px-2">
                <span></span>
                <span className="hidden text-red-500 font-bold col-span-2 text-start text-sm" id="descricaoProdutoError"></span>
            </div>

            <button className="rounded-xl shadow-md shadow-green-800 py-1 px-4 font-bold bg-green-400 hover:bg-green-700 my-2" type="submit" onClick={handleFormFocus}>Cadastrar</button>
        </form>
    );
}

export default memo(FormularioProduto);
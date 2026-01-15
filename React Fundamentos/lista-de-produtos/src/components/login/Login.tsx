import { useContext, useRef, type FormEvent } from "react";
import { UserContext } from "../../contexts/usetContext";
import { useInput } from "../../hooks/useInput";

export function Login() {

    const error = useRef<HTMLSpanElement>(null);

    const nome = useInput("");
    const { setUsuario } = useContext(UserContext);

    function submit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (error.current)
            error.current.textContent = "";
        validarFormulario();
        if (error.current && error.current.textContent.length < 1) {
            setUsuario({nome: nome.valor.trim(), autenticado: true});
        }
    }

    function validarFormulario(): void {
        if (nome.valor.trim().length === 0 && error.current)
            error.current.textContent = "Usuário obrigatório";
    }

    return (
        <form onSubmit={submit} className="border rounded-2xl py-28 max-w-96 flex flex-col items-center mx-auto">
            <div className="flex flex-col items-start">
                <label htmlFor="inputLogin" className="font-bold">Usuário</label>
                <input className="border ps-2 py-1" type="text" id="inputLogin" onChange={nome.onChange}/>
                <span ref={error}></span>
            </div>
            <button className="rounded-xl shadow-md shadow-green-800 py-2 px-7 font-bold bg-green-400 hover:bg-green-700 mt-6">Logar</button>
        </form>
    )
}
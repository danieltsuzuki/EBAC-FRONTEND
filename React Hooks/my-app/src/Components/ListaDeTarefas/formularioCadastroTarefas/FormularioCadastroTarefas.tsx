import { memo, useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { useInput } from "../../../hooks/UseInput"
import { StatusEnum } from "../../../enums/Enum";
import type { TypePropsFormularioCadastroTarefas, TypeTarefa } from "../../../Types/Types";
import Modal from "../../modal/Modal";

function FormularioCadastroTarefas( { criarTarefa, tarefas } : TypePropsFormularioCadastroTarefas ) {
    const nome = useInput<string>("");
    const [ mostrarModal, setMostrarModal ] = useState(false);
    const [ mensagem, setMensagem] = useState("");
    

    const enviar = useCallback((e: FormEvent<HTMLFormElement>) => {        
        try {
            e.preventDefault();
            validar();
            
            const novaTarefa = {
                id: crypto.randomUUID(),
                nome: nome.valor,
                status: StatusEnum.PENDENTE
            };

            criarTarefa(novaTarefa);

            nome.limpar();
            inputRef.current?.focus();
        } catch(error: unknown) {
            nome.limpar();
            if (error instanceof Error){
                setMostrarModal(true);
                setMensagem(error.message);
            }
        }
    }, [criarTarefa, validar, nome.limpar])

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

    useEffect(() => {
        if (mostrarModal) {
            const timer = setTimeout(() => {
                setMostrarModal(false);
                setMensagem("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [mostrarModal]);

    function validar() {
        if (nome.valor.trim() === "")
            throw Error("Nome obrigatório")
        
        tarefas.filter((tarefa: TypeTarefa) => tarefa.nome === nome.valor).map(() => {
            throw Error("Tarefa já cadastrada");
        });
    }


    return (
        <>
            {mostrarModal && <Modal mensagem={ mensagem }/>}
            <form className="max-w-1/3 max-sm:max-w-1/2 mx-auto p-5 rounded-xl flex flex-col items-center justify-center  mt-32 shadow-xl bg-gray-50"
                onSubmit={enviar}>

                <h2 className="text-2xl my-2.5">Escreva suas tarefas</h2>
            
                <div className="flex flex-col min-w-1/2">
                    <label className="mb-1">nome</label>
                    <input type="text" onChange={nome.onChange} value={nome.valor} ref={inputRef}
                    className="border ps-2 rounded-lg w-full"/>
                </div>

                <button className="bg-green-400 rounded-xl px-4 py-1 font-bold shadow-sm mt-2.5">Salvar</button>
            </form>
        </>
    );
}

export default memo(FormularioCadastroTarefas);
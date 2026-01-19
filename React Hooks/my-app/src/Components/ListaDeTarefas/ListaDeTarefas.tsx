import { useCallback, useContext, useMemo, useState } from "react";
import FormularioCadastroTarefas from "./formularioCadastroTarefas/FormularioCadastroTarefas";
import type { TypeContext, TypeTarefa } from "../../Types/Types";
import Tarefa from "./tarefa/Tarefa";
import { StatusEnum } from "../../enums/Enum";
import Filtro from "./filtro/Filtro";
import { Context } from "../../contexts/Context";

function ListaDeTarefas() {

    const { temaClaro } = useContext<TypeContext>(Context);

    const  [ tarefas , setTarefas ]  = useState<TypeTarefa[]>([]);

    const [ filtro, setFiltro ] = useState("TODOS");

    const status = ["TODOS", "CONCLUIDO", "PENDENTE"];

    console.log("Lista de Tarefas");

    const criarTarefa = useCallback((novaTarefa: TypeTarefa) => {
        setTarefas((prev: TypeTarefa[]) => [...prev, novaTarefa]);
    }, []);

    const removerTarefa = useCallback((id: string) => {
        setTarefas((prev: TypeTarefa[]) => prev.filter(tarefa => tarefa.id !== id));
    }, []);

    const alterarStatus = useCallback((tarefa: TypeTarefa) => {
        const status = tarefa.status === StatusEnum.CONCLUIDO ? StatusEnum.PENDENTE : StatusEnum.CONCLUIDO;
        setTarefas(( prev: TypeTarefa[] ) => 
            prev.map( t => 
                t.id === tarefa.id ? {...t, status: status} : t
            )
    );
    }, []);

    const tarefasFiltradas = useMemo(() => {
        if (filtro === "TODOS") return tarefas;
        return tarefas.filter(t => t.status === filtro);
    }, [tarefas, filtro])


    return(
        <div>
            <FormularioCadastroTarefas criarTarefa={criarTarefa} tarefas={tarefas}/>
        
            <ul className={`shadow-md w-1/2 mx-auto mt-5 p-4 rounded-2xl ${temaClaro === true ? "bg-gray-200" : "bg-gray-700"}`}>
                <Filtro opcoes={status} onChange={setFiltro} valorSelecionado={filtro} />
                <li className="p-2 grid grid-cols-3">
                    <span className="font-bold mx-auto">Tarefa</span>
                    <span className="font-bold mx-auto">STATUS</span>
                    <span className="font-bold mx-auto">Ações</span>
                </li>
                {
                    tarefasFiltradas.length > 0 ?  tarefasFiltradas.map((t: TypeTarefa) => <Tarefa key={t.id} tarefa={t} removerTarefa={removerTarefa} alterarStatus={alterarStatus}/> ) : 
                    <li className="rounded-xl p-2 shadow-md bg-red-100 mb-2 text-center font-bold">
                        Nenhuma tarefa encontrada!
                    </li>
                }
            </ul>
        </div>
    );
}

export default ListaDeTarefas;
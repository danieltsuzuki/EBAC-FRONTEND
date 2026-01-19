import { memo, useCallback, useRef } from "react";
import type { TypePropsTarefa } from "../../../Types/Types";
import check from "../../../assets/img/check.svg"
import trash from "../../../assets/img/trash.svg"
import "./tarefacss.css";
import { StatusEnum } from "../../../enums/Enum";

function Tarefa( {tarefa, removerTarefa, alterarStatus}: TypePropsTarefa ) {

    const liRef = useRef<HTMLLIElement>(null);

    console.log(`Tarefa: ${tarefa.nome}`)

    const deletar = useCallback(() => {
        liRef.current?.classList.add("fade-out");
        setTimeout(() => {
            removerTarefa(tarefa.id);
        }, 400);
    }, [ tarefa.id, removerTarefa]);

    const atualizarStatus = () => {
        alterarStatus(tarefa);
    };

    const bgStatus = tarefa.status === StatusEnum.PENDENTE ? "bg-amber-600" : "bg-green-500";

    return (
        <li className="rounded-xl p-2 shadow-md bg-gray-50 mb-2 grid grid-cols-3" ref={liRef}>
            <p className="mx-auto truncate w-full">
                {tarefa.nome}
            </p>
            
            <span className={`${bgStatus} rounded-lg px-2 font-bold mx-auto`}>
                {tarefa.status} 
            </span>
            
            <div className="flex justify-center gap-1.5 w-fit mx-auto">
                <span className="p-1.5 bg-blue-500 hover:bg-blue-700 rounded-full" onClick={atualizarStatus}>
                    <img className="w-4" src={check} alt="Ícone para concluir" />
                </span>
                <span className="p-1.5  bg-red-500 hover:bg-red-700 rounded-full" onClick={deletar}>
                    <img className="w-4" src={trash} alt="Ícone para remoção" />
                </span>
            </div>
        </li>
    );
}

export default memo(Tarefa);
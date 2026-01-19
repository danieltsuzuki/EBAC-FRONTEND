import type { StatusEnum } from "../enums/Enum";

export type TypeTarefa = {
    id: string,
    nome: string, 
    status: StatusEnum
}

export type TypePropsFormularioCadastroTarefas = {
    criarTarefa: (t: TypeTarefa) => void,
    tarefas: TypeTarefa[]
}

export type TypeErroContext = {
    mensagem: string,
    setMensagem: (m: string) => void
}

export type TypeContext = {
    temaClaro: boolean
    setTemaClaro: (temaClaro: boolean) => void
}

export type TypeCreateContext = {
    tema: TypeContext,
    setTema: (t: TypeContext) => void
}

export type TypePropsTarefa = {
    tarefa: TypeTarefa,
    removerTarefa: (id: string) => void;
    alterarStatus: (tarefa: TypeTarefa) => void;
}
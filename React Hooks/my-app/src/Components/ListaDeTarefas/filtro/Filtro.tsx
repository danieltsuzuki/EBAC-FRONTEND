type TypeFiltroProps = {
    opcoes: string[];
    onChange: (f: string) => void,
    valorSelecionado: string
}


export function Filtro( { opcoes, onChange, valorSelecionado }: TypeFiltroProps) {

    return (
        <div className="flex justify-end w-[95%]">
            <select className="border bg-white" value={valorSelecionado} onChange={e => onChange(e.target.value)}>
                {
                    opcoes.map(
                        (op: string) => <option key={op} value={op}>{op}</option>
                    )
                }
            </select>
        </div>
    );
}

export default Filtro;


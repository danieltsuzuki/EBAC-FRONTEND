import imagemSol from "../../assets/img/sun.png"
import imagemLua from "../../assets/img/moon.png"
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import type { TypeContext } from "../../Types/Types";


export function SelectTema() {

    const { temaClaro, setTemaClaro } = useContext<TypeContext>(Context);
    console.log(temaClaro);
    return (
        <>
            {
                <div className="flex justify-end w-[95%]">
                    <img src={temaClaro ? imagemLua : imagemSol} alt={temaClaro ? "Mudar para tema escuro" : "Mudar para tema claro"} onClick={() => setTemaClaro(!temaClaro)} 
                    className={`mt-2 rounded-full cursor-pointer p-2 ${temaClaro ? "bg-gray-900" : "bg-white"}`}/>
                </div>
            }
            
        </>
    );
    
}

export default SelectTema;


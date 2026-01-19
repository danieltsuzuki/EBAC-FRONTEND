import { useEffect, useState } from "react";
import './modalcss.css';

function Modal( { mensagem }: {mensagem: string}) {

    const [visivel, setVisivel] = useState(true);

    useEffect(() => {
        const id = window.setTimeout(() => setVisivel(false), 3000);
        return () => window.clearTimeout(id);
    },[]);

    if (!visivel) return null;

    console.log("modal: " + mensagem)

    return (
        <div className="absolute top-1 right-1 animacaoSlideIn">
            <div className="z-50 w-56 h-32 flex justify-center items-center bg-gray-300 text-center shadow-2xl rounded-md font-bold">
                <span>{mensagem}</span>
            </div>
        </div>
    );
}

export default Modal;
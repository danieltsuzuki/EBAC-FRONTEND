import { useState, type ChangeEvent } from "react";
import type { TypeUseInput } from "../types/TypeUseInput";

export function useInput<T>(valorInicial: T): TypeUseInput<T> {
    const [valor, setValor] = useState(valorInicial);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | T) => {
        if (typeof e === 'object' && e !== null && 'target' in e) {
            setValor((e.target as HTMLInputElement | HTMLTextAreaElement).value as unknown as T);
        } else {
            setValor(e);
        }
    };

    const limpar = () => {
        setValor(valorInicial);
    };

    return { valor, onChange, limpar };
}
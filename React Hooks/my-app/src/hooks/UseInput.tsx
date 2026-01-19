import { useState, type ChangeEvent } from "react";

export function useInput<T>(valorInicial: T) {
    const [valor, setValor] = useState(valorInicial);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value as unknown as T);
    }

    const limpar = () => {
        setValor(valorInicial);
    }

    return {
        valor, onChange, limpar
    };
}
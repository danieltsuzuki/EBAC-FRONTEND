import type { ChangeEvent } from "react";

export type TypeUseInput<T> = {
    valor: T;
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    limpar: () => void;
};
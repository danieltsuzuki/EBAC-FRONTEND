import { createContext } from "react";
import type { TypeContext } from "../Types/Types";

export const Context = createContext<TypeContext>({
    temaClaro: true, setTemaClaro: () => {}
});
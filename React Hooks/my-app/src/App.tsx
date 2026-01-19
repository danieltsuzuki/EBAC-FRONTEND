import { useEffect, useState } from "react";
import ListaDeTarefas from "./Components/ListaDeTarefas/ListaDeTarefas"
import { Context } from "./contexts/Context";
import SelectTema from "./Components/selectTema/SelectTema";

function App() {

  const [ temaClaro, setTemaClaro ] = useState<boolean>(true);

  console.log("APP")

  useEffect(() => {
    document.body.classList.remove("bg-gray-100", "bg-gray-900");
    temaClaro === true ? document.body.classList.add("bg-gray-100") : document.body.classList.add("bg-gray-900");
  }, [temaClaro])

  return (
    <Context.Provider value = { {temaClaro, setTemaClaro} }>
      <SelectTema/>

      <main>
        <ListaDeTarefas/>
      </main>
    </Context.Provider>
  )
}

export default App;

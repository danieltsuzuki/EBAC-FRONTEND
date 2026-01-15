import './App.css'
import ListaProdutos from './components/listaProdutos/ListaProdutos'
import { UserContext } from './contexts/usetContext'
import { Login } from './components/login/Login';
import { useState } from 'react';

function App() {

  const [usuario, setUsuario] = useState<any>({
    nome: '', autenticado: false
  });

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
      <main className='max-w-7xl'>
        {usuario.autenticado ? <ListaProdutos/> : <Login />}
      </main>     
    </UserContext.Provider>
  )
}

export default App

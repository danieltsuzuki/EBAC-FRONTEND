import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 'task-1',
      text: 'Configurar o RecoilRoot na aplicação',
      isComplete: true,
      category: 'Setup',
      createdAt: 'Hoje, 09:30',
    },
    {
      id: 'task-2',
      text: 'Criar átomos para lista de tarefas e filtro ativo',
      isComplete: true,
      category: 'Recoil',
      createdAt: 'Hoje, 10:15',
    },
    {
      id: 'task-3',
      text: 'Implementar o seletor filteredTodoListState',
      isComplete: false,
      category: 'Recoil',
      createdAt: 'Hoje, 11:00',
    },
    {
      id: 'task-4',
      text: 'Conectar componentes com useRecoilState e useRecoilValue',
      isComplete: false,
      category: 'UI & State',
      createdAt: 'Hoje, 11:45',
    },
  ],
});

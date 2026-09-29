import { selector } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';
import { todoListFilterState, FilterOptions } from '../atoms/todoListFilterAtom';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FilterOptions.COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterOptions.UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      case FilterOptions.ALL:
      default:
        return list;
    }
  },
});

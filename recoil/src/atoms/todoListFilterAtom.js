import { atom } from 'recoil';

export const FilterOptions = {
  ALL: 'Show All',
  COMPLETED: 'Show Completed',
  UNCOMPLETED: 'Show Uncompleted',
};

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: FilterOptions.ALL,
});

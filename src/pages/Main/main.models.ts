import type { BookDto } from '@entities/Book';

export interface MainViewModelState {
  list: BookDto[];
  searchString: string;
  prevSearchString: string | null;
  isFetching: boolean;
}

export interface MainViewModelProps {}

export interface MainProps {
  list: BookDto[];
  searchString: string;
  onSearchStringChange: (searchString: string) => void;
  onSearchButtonClick: () => void;
  isFetching: boolean;
}

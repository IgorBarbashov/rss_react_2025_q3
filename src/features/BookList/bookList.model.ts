import type { BookDto } from '@entities/Book';

export interface BookListProps {
  list: BookDto[];
  isFetching: boolean;
}

import { getUrl } from './book.helpers';
import type { BookDto } from './book.model';

export const bookService = {
  async searchBooks(searchString: string): Promise<BookDto[]> {
    const url: string = getUrl(searchString);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()).docs as BookDto[];
  },
};

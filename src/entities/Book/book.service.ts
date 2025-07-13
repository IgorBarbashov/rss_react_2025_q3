import { getUrl } from './book.helpers.ts';

export const bookService = {
  searchBooks(searchString: string) {
    const url = getUrl(searchString);
    // fetch
    console.log(url);
  },
};

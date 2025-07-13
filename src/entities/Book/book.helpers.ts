import { BASE_URL, FIELDS, DEFAULT_OFFSET, DEFAULT_LIMIT } from './book.config';

export const getUrl = (searchString: string): string => {
  const url = new URL(BASE_URL);
  url.searchParams.set('offset', DEFAULT_OFFSET);
  url.searchParams.set('limit', DEFAULT_LIMIT);
  url.searchParams.set('fields', FIELDS.join(','));

  if (searchString) {
    url.searchParams.set('q', searchString);
  } else {
    url.searchParams.delete('q');
  }

  return url.href;
};

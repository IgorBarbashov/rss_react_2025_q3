export const normalizeSearchString = (searchString: string): string =>
  searchString.trim().toLowerCase();

export const validateSearchString = (
  searchString: string,
  prevSearchString: string
): boolean => searchString !== prevSearchString;

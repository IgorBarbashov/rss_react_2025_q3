export const normalizeSearchString = (searchString: string): string =>
  searchString.trim().toLowerCase();

export const validateSearchString = (
  searchString: string,
  prevSearchString: string | null
): boolean => searchString !== prevSearchString;

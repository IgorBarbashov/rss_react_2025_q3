import { safeJSON } from '../json/json';

type RawData = string | number | Record<string | number, unknown>;

export const STORAGE_KEYS = {
  SEARCH_STRING: 'searchString',
};

export const storage = {
  setItem(key: string, obj: RawData) {
    const serializedObj = safeJSON.stringify(obj);

    if (serializedObj !== null) {
      localStorage.setItem(key, serializedObj);
    }
  },

  getItem(key: string): RawData | null {
    const serializedObj = localStorage.getItem(key);

    return serializedObj === null
      ? serializedObj
      : safeJSON.parse(serializedObj);
  },

  removeItem(key: string) {
    localStorage.removeItem(key);
  },
};

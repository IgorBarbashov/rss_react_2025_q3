type RawData = string | number | Record<string | number, unknown>;

export const safeJSON = {
  stringify: <T = RawData>(obj: T): string | null => {
    try {
      return JSON.stringify(obj);
    } catch {
      return null;
    }
  },

  parse: <T = RawData>(str: string): T | null => {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  },
};

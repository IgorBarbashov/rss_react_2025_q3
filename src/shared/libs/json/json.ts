type RawData = string | number | Record<string | number, unknown>;

export const safeJSON = {
  stringify: (obj: RawData): string | null => {
    try {
      return JSON.stringify(obj);
    } catch {
      return null;
    }
  },

  parse: (str: string): RawData | null => {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  },
};

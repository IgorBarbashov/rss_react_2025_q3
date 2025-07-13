export interface CrashAppProps {}

export interface CrashAppState {
  isCrashed: {
    reason: string;
  } | null;
}

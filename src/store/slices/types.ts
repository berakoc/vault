export type SetStore<S> = (
  partial: S | Partial<S> | ((state: S) => S | Partial<S>),
  replace?: boolean | undefined
) => void;
export type SS = null;

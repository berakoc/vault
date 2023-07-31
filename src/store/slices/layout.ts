import { SetStore } from './types';

export type PageMeta = {
  title: string;
  description: string;
} | Record<string, never>;

export interface LayoutState {
  activeNavLinkIndex: number;
  setActiveNavLinkIndex: (activeNavLinkIndex: number) => void;
  pageMeta: PageMeta;
  setPageMeta: (pageMeta: PageMeta) => void;
}

export const initialLayoutState: Pick<LayoutState, 'activeNavLinkIndex' | 'pageMeta'> = {
  activeNavLinkIndex: 0,
  pageMeta: {},
};

export const createLayoutSlice = (set: SetStore<LayoutState>): LayoutState => ({
  ...initialLayoutState,
  setActiveNavLinkIndex: (activeNavLinkIndex) => set(() => ({ activeNavLinkIndex })),
  setPageMeta: (pageMeta) => set(() => ({ pageMeta })),
});

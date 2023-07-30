import { SetStore } from './types';

export interface LayoutState {
  activeNavLinkIndex: number;
  setActiveNavLinkIndex: (activeNavLinkIndex: number) => void;
}

export const initialLayoutState: Pick<LayoutState, 'activeNavLinkIndex'> = {
  activeNavLinkIndex: 0,
};

export const createLayoutSlice = (set: SetStore<LayoutState>): LayoutState => ({
  ...initialLayoutState,
  setActiveNavLinkIndex: (activeNavLinkIndex) => set(() => ({ activeNavLinkIndex })),
});

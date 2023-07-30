import { AppState } from '..';

export const activeNavLinkIndexSelector = (state: AppState) => state.activeNavLinkIndex;
export const setActiveNavLinkIndexSelector = (state: AppState) => state.setActiveNavLinkIndex;

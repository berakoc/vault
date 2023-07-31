import { AppState } from '..';

export const activeNavLinkIndexSelector = (state: AppState) => state.activeNavLinkIndex;
export const setActiveNavLinkIndexSelector = (state: AppState) => state.setActiveNavLinkIndex;
export const pageMetaSelector = (state: AppState) => state.pageMeta;
export const setPageMetaSelector = (state: AppState) => state.setPageMeta;

import { create } from 'zustand';
import { LayoutState, createLayoutSlice } from './slices/layout';
import { SetStore } from './slices/types';

export type AppState = LayoutState;

const store = (set: SetStore<AppState>) => ({
  ...createLayoutSlice(set),
});

const useStore = create<AppState>(store);

export default useStore;

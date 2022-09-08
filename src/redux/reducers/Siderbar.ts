//// Example

import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from '../store';
// Define a type for the slice state
export type ISidebarType = 'MiddleNav' | 'MainNav' | '';
interface ISidebarState {
  isOpen: boolean;
  type?: ISidebarType;
  showCloseIcon?: boolean;
}

// Define the initial state using that type
const initialState: ISidebarState = {
  isOpen: false,
  type: '',
  showCloseIcon: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState,
  reducers: {
    toggleSidebar: (state, action: { payload: Partial<ISidebarState> }) => {
      state.isOpen = action.payload?.isOpen || false;
      state.type = action.payload?.type;
      state.showCloseIcon = action.payload.showCloseIcon;
    },
  },
  extraReducers: (builder) => {},
});

// Extract the action creators object and the reducer
const { actions, reducer } = sidebarSlice;

export const { toggleSidebar } = actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSidebarSlice = (state: AppState) => state.sidebar;

export const Sidebar = reducer;

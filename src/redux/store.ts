import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { Sidebar, User } from './reducers';
const reducers = combineReducers({
  user: User,
  sidebar: Sidebar,
});
const makeStore = () =>
  configureStore({
    reducer: reducers,
    devTools: true,
  });
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// export const fetchSubject =
//   (id: any): AppThunk =>
//   async dispatch => {
//     const timeoutPromise = (timeout: number) =>
//       new Promise(resolve => setTimeout(resolve, timeout))

//     await timeoutPromise(200)

//     dispatch(
//       subjectSlice.actions.setEnt({
//         [id]: {
//           id,
//           name: `Subject ${id}`,
//         },
//       })
//     )
//   }

// export const wrapper = createWrapper<AppStore>(makeStore)

// export const selectSubject = (id: any) => (state: AppState) =>
//   state?.[subjectSlice.name]?.[id]

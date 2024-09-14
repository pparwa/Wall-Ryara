import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./store/Todos";
export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: todosReducer,

});

export default store;

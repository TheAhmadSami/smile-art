import { configureStore } from '@reduxjs/toolkit'
import langReducer from './lang'
import configsReducer from "./configs";
import reservation from "./reservation";

export const store = configureStore({
  reducer: {
    lang: langReducer,
    configs: configsReducer,
    reservation,
  },
});
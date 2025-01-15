import { configureStore } from "@reduxjs/toolkit";
import { profilesReducer } from "./profiles/profilesReducer";
import { counterReducer } from "./counter/counterReducer";

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    counter: counterReducer,
  },
});

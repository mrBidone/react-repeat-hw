import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { profilesReducer } from "./profiles/profilesReducer";
import { counterReducer } from "./counter/counterReducer";
import { filterReducer } from "./filter/filterReducer";

const profilesConfig = {
  key: "profiles",
  storage,
  whitelist: ["profiles"],
};

const counterConfig = {
  key: "counter",
  storage,
  whitelist: ["counter", "step"],
};

export const store = configureStore({
  reducer: {
    profiles: persistReducer(profilesConfig, profilesReducer),
    counter: persistReducer(counterConfig, counterReducer),
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ПІСЛЯ СТВОРЕННЯ ПЕРСИСТОРА СТВОРЮЄМО <PersistGate> в main.jsx!!!!!!!!!!!

import { configureStore, getDefaultMiddelware } from "@reduxjs/toolkit";
import { conversationReducer } from "./reducers/conversationReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
// createdPersistConfig object
const persistConfig = {
  key: "root",
  storage,
};
// created persistedReducer to store value of conversationReducer to localStorage
const persistedReducer = persistReducer(persistConfig, conversationReducer);

//
export const store = configureStore({
  reducer: {
    conversations: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddelware) =>
    getDefaultMiddelware({
      serializableCheck: false,
    }).concat(thunk),
});
// created persistor variable to store value of store to localStorage
export const persistor = persistStore(store);

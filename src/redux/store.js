import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./phoneBookReducer";
import { contactApi } from "./phoneBookSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});

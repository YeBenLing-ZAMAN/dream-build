import { configureStore } from "@reduxjs/toolkit";
import { pcBuilderApi } from "./api/apiSlice";
import cartSlice from "./api/cartSlice";

export const store = configureStore({
  reducer: {
    [pcBuilderApi.reducerPath]: pcBuilderApi.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pcBuilderApi.middleware),
});

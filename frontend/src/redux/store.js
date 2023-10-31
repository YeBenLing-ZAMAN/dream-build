import { configureStore } from '@reduxjs/toolkit'
import { pcBuilderApi } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    [pcBuilderApi.reducerPath]: pcBuilderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pcBuilderApi.middleware),
})
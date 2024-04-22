import { configureStore } from "@reduxjs/toolkit";

import { OrenApi } from "./OrenApi";

export const store = configureStore({
  reducer: {
    [OrenApi.reducerPath]: OrenApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(OrenApi.middleware),
});

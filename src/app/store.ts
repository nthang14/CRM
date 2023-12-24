import { configureStore } from "@reduxjs/toolkit";
// auth
import { authServiceApi } from "~/app/services/authService";
import authSlice from "~/app/slices/authSlice";

import commonSlice from "~/app/slices/commonSlice";
export const store = configureStore({
  reducer: {
    // auth
    auth: authSlice,
    [authServiceApi.reducerPath]: authServiceApi.reducer,
    // common
    common: commonSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authServiceApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

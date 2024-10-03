import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { homeSlice } from "./data/homeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    home: homeSlice.reducer
  }
});
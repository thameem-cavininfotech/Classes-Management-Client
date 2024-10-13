import { configureStore } from "@reduxjs/toolkit";
import classSlice from "../classSlice/index";
export const store = configureStore({
  reducer: {
    class: classSlice,
  },
});

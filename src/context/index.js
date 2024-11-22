import { configureStore } from "@reduxjs/toolkit";
import twitsReducer from "./twitsSlice"
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
    reducer: {
        twits: twitsReducer,
        wishlist: wishlistSlice,
    }
})
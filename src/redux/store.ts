import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Ensure the correct file name

export const store = configureStore({
    reducer: {
        cart: cartReducer, // Use a descriptive key for the reducer
    },
});

// Correctly type the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

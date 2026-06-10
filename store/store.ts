import { configureStore } from "@reduxjs/toolkit";
import uberReducer from "./uberSlices";

export const store = configureStore({
    reducer: {
        uber: uberReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
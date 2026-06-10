import { createSlice } from "@reduxjs/toolkit";
import { Place } from "@/constants/types";

const initialState = {
    origin: null as Place | null,
    destination: null as Place | null,
    travelTimeInformation: null,
};

export const uberSlices = createSlice({
    name: "uber",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
    uberSlices.actions;

// Selectors
export const selectOrigin = (state: any) => state.uber.origin;
export const selectDestination = (state: any) => state.uber.destination;
export const selectTravelTimeInformation = (state: any) =>
    state.uber.travelTimeInformation;

export default uberSlices.reducer;
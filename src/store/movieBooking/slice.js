import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    chairBookings: [],
    chairBookeds: [],
};

const movieBookingSlice = createSlice({
    name: 'movieBooking',
    initialState,
    reducers: {
        setSeatBookings: (state, action) => {
            const index = state.chairBookings.findIndex(
                (item) => item.soGhe === action.payload.soGhe
            );
            if (index !== -1) {
                state.chairBookings.splice(index, 1);
            } else {
                state.chairBookings.push(action.payload);
            }
        },
        setSeatBookeds: (state, { payload }) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings];
            state.chairBookings = [];
        },
    },
});

export const { reducer: movieBookingReducer, actions: movieBookingActions } = movieBookingSlice;

import { createSlice } from "@reduxjs/toolkit";

export const travelerSlice = createSlice({
    name: 'traveler',
    initialState: {
        cash: 200,
        days: 0,
        supplies: 0,
        fatigue: 0,
        disrepair: 0,
        reputation: 100,
    },
    reducers: {
        buy: (state, action) => {
            state.supplies += (2 * action.payload);
            state.cash -= action.payload;
        },
        gather: (state, action) => {
            state.days += action.payload;
            state.supplies += (3 * action.payload);
            state.fatigue += (2 * action.payload);
        },
        sell: (state, action) => {
            state.supplies -= action.payload;
            state.cash += (1 * action.payload);
        },
        travel: (state, action) => {
            state.days += action.payload;
            state.supplies -= (6 * action.payload);
            state.fatigue += action.payload;
            state.disrepair += (3 * action.payload);
        },
        rest: (state, action) => {
            state.days += action.payload;
            state.supplies -= (4 * action.payload);
            state.fatigue -= action.payload;
        },
        repair: (state, action) => {
            state.supplies -= (8 * action.payload);
            state.fatigue += (1 * action.payload);
            state.disrepair -= (8 * action.payload);
        },
        steal: (state, action) => {
            state.supplies += (4 * action.payload);
            state.reputation -= 20;
        },
    }
})

export const { rest, travel, sell, gather, buy, repair, steal } = travelerSlice.actions;
export default travelerSlice.reducer;
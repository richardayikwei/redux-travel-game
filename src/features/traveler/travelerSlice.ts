import { createSlice } from "@reduxjs/toolkit";

export const travelerSlice = createSlice({
    name: 'traveler',
    initialState: {
        cash: 100,
        days: 0,
        supplies: 0,
        fatigue: 0,
        disrepair: 0,
        reputation: 100,
        cashWarning: 'Funds Available',
        suppliesWarning: 'Adequate Supplies',
        fatigueWarning: 'Low Tiredness',
        reputationWarning: 'Suspicious character',
        repairWarning: 'Meduim damage to wagon',
    },
    reducers: {
        buy: (state, action) => {
            if (action.payload < 0) {
                state.cashWarning = 'Invalid Amount';
            } else if ((state.cash - action.payload) < 0) {
                state.cashWarning = 'Sorry not enough cash for transaction';
            } else {
                state.supplies += (2 * action.payload);
                state.cash -= action.payload;
            }
        },
        gather: (state, action) => {
            if (action.payload < 0) {
                state.suppliesWarning = 'Invalid Days'
            } else if (action.payload > 50) {
                state.suppliesWarning = 'Exceeded maximum number of gathering days'
            } else if (state.fatigue >= 100) {
                state.fatigueWarning = 'Unable to continue gathering'
            } else if (state.fatigue < 100) {
                state.days += action.payload;
                state.supplies += (3 * action.payload);
                state.fatigue += (2 * action.payload);
            }
        },
        sell: (state, action) => {
            if (action.payload < 0) {
                state.suppliesWarning = 'Invalid Days'
            } else if (action.payload > state.supplies) {
                state.suppliesWarning = 'Exceeded maximum number of supplies'
            } else if (state.supplies > 0) {
                state.supplies -= action.payload;
                state.cash += (0.5 * action.payload);
            }
        },
        travel: (state, action) => {
            if (action.payload < 0) {
                state.suppliesWarning = 'Invalid Days'
            } else if (action.payload > (state.supplies - (6 * action.payload))) {
                state.suppliesWarning = 'Not enough supplies'
            } else if (state.fatigue >= 100) {
                state.fatigueWarning = 'Unable to continue traveling'
            } else if (state.fatigue < 100) {
                state.days += action.payload;
                state.supplies -= (6 * action.payload);
                state.fatigue += action.payload;
                state.disrepair += (3 * action.payload);
            }
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
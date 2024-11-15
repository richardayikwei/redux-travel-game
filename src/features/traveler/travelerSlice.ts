import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootTravelerState } from "../types/traveler";

export const travelerSlice = createSlice({
    name: "traveler",
    initialState: {
        cash: 100,
        days: 0,
        supplies: 0,
        fatigue: 0,
        disrepair: 0,
        reputation: 100,
        distance: 0,
    },
    reducers: {
        buy: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.cash - action.payload < 0) {
                toast.error(`Not enough cash: Cash available $${state.cash}`);
            } else {
                state.supplies += 2 * action.payload;
                state.cash -= action.payload;
                toast.success(`Buying....: ${state.supplies} Supplies Available`);
            }
        },
        gather: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.fatigue + (2 * action.payload) > 100) {
                toast.error("Unable to continue gathering : New fatigue levels exceed 100");
            } else {
                state.days += action.payload;
                state.supplies += (3 * action.payload);
                state.fatigue += (2 * action.payload);
                toast.success(`Gathering....: ${state.supplies} Supplies Available`);
            }
        },
        sell: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (action.payload > state.supplies) {
                toast.error(`Exceeded Supplies Available: Current supplies ${state.supplies}`);
            } else {
                state.supplies -= action.payload;
                state.cash += (0.5 * action.payload);
                toast.success(`Selling....: ${state.supplies} Supplies Available`);
            }
        },
        travel: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.supplies < (action.payload * 6)) {
                toast.error(`Not Enough Supplies: Supplies needed ${(6 * action.payload)}`);
            } else if (state.fatigue >= 100) {
                toast.error("Unable to Continue Traveling: New fatigue levels exceed 100, consider Resting.");
            } else if (state.disrepair >= 100) {
                toast.error("Unable to Continue Traveling: Disrepair levels exceed 100, consider Repairing wagon.");
            } else {
                state.days += action.payload;
                state.supplies -= 6 * action.payload;
                state.fatigue += action.payload;
                state.disrepair += 3 * action.payload;
                state.distance += 10 * action.payload;
                toast.success(`Traveling....: ${state.supplies} Supplies Available`);
            }
        },
        rest: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.supplies < (4 * action.payload)) {
                toast.error(`Not Enough Supplies: Supplies needed ${(4 * action.payload)}`);
            } else if (state.fatigue <= 0) {
                toast.error('Fully Rested: Can not continue to Rest');
            } else {
                state.days += action.payload;
                state.supplies -= 4 * action.payload;
                state.fatigue -= action.payload;
                toast.success(`Resting....: ${state.supplies} Supplies Available`);
            }
        },
        repair: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.disrepair <= 0) {
                toast.error('Fully Repaired: Can not continue to Repairing');
            } else if (state.supplies < (8 * action.payload)) {
                toast.error(`Not Enough Supplies: Supplies needed ${(8 * action.payload)}`);
            } else if (state.fatigue + action.payload >= 100) {
                toast.error("Too Tired to Repair: Consider Resting.");
            } else {
                state.days += action.payload;
                state.supplies -= 8 * action.payload;
                state.fatigue += action.payload;
                state.disrepair -= 8 * action.payload;
                toast.success(`Repairing....: ${state.supplies} Supplies Available`);
            }
        },
        steal: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.reputation < (20 * action.payload)) {
                toast.error(`You do not have enough Reputation for this action: Current Reputation: ${state.reputation}, Reputation Required: ${(20 * action.payload)}`);
            } else {
                state.supplies += 4 * action.payload;
                state.reputation -= (20 * action.payload);
                state.days += action.payload;
                toast.success(`Stealing....: ${state.supplies} Supplies Available`);
            }
        },
        reset: (state) => {
            state.cash = 100;
            state.days = 0;
            state.disrepair = 0;
            state.fatigue = 0;
            state.reputation = 100;
            state.supplies = 0;
            state.distance = 0;
            toast.success('Game Reset Successfull');
        }
    },
});

export const { rest, travel, sell, gather, buy, repair, steal, reset } =
    travelerSlice.actions;
export const selectTraveler = (state: RootTravelerState) => state.traveler;
export default travelerSlice.reducer;

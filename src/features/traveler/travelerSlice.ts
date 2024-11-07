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
            }
        },
        gather: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (state.fatigue + (2 * action.payload) > 100) {
                toast.error("Unable to continue gathering : Fatigue levels exceed 100");
            } else {
                state.days += action.payload;
                state.supplies += (3 * action.payload);
                state.fatigue += (2 * action.payload);
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
            }
        },
        travel: (state, action) => {
            if (action.payload <= 0) {
                toast.error("Invalid Number of Days: Enter a number greater than 0");
            } else if (state.reputation <= 0) {
                toast.error('Outlaw Reputation: Law enforcement have been dispatched to apprehend you');
            } else if (action.payload > state.supplies - (6 * action.payload)) {
                toast.error(`Not Enough Supplies: Supplies needed ${(6 * action.payload)}`);
            } else if (state.fatigue >= 100) {
                toast.error("Unable to Continue Traveling: Fatigue levels exceed 100, consider Resting.");
            } else if (state.disrepair >= 100) {
                toast.error("Unable to Continue Traveling: Disrepair levels exceed 100, consider Repairing wagon.");
            } else {
                state.days += action.payload;
                state.supplies -= 6 * action.payload;
                state.fatigue += action.payload;
                state.disrepair += 3 * action.payload;
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
                toast.success("Reducing tiredness....");
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
            } else if (state.fatigue + 1 * action.payload > 100) {
                toast.error("Too Tired to Repair: Consider Resting.");
            } else {
                state.days += action.payload;
                state.supplies -= 8 * action.payload;
                state.fatigue += 1 * action.payload;
                state.disrepair -= 8 * action.payload;
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
            }
        },
        reset: (state) => {
            state.cash = 100;
            state.days = 0;
            state.disrepair = 0;
            state.fatigue = 0;
            state.reputation = 100;
            state.supplies = 0;
            toast.success('Game Reset Successfull');
        }
    },
});

export const { rest, travel, sell, gather, buy, repair, steal, reset } =
    travelerSlice.actions;
export const selectTraveler = (state: RootTravelerState) => state.traveler;
export default travelerSlice.reducer;

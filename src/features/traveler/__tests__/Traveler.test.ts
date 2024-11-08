
import travelerReducer, {
    travel,
    gather,
    sell,
    repair,
    buy,
    rest,
    steal,
    reset,
} from "../travelerSlice";
import '@testing-library/jest-dom';



describe(' buy traveler reducer', () => {
    const initialState = {
        cash: 100,
        days: 0,
        supplies: 0,
        fatigue: 0,
        disrepair: 0,
        reputation: 100,
    }

    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, buy(-1))).toBe(initialState);
    })
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, buy(0))).toBe(initialState);
    })
});

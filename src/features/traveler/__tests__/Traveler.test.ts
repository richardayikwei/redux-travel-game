
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
    test('should return intialState without any changes if reputation is a zero', () => {
        expect(travelerReducer(initialState, buy(0))).toBe(initialState);
    })
    test('should return intialState without any changes if reputation is is a negative number', () => {
        expect(travelerReducer(initialState, buy(-7))).toBe(initialState);
    })
    test('should return intialState without any changes if payload is greater than cash', () => {
        expect(travelerReducer(initialState, buy(101))).toBe(initialState);
    })
    test('should update supplies and cash if reputation is not less than or equal to zero and cash is not less than or equal to zero', () => {
        const result = {
            cash: 99,
            days: 0,
            supplies: 2,
            fatigue: 0,
            disrepair: 0,
            reputation: 100,
        };
        expect(travelerReducer(initialState, buy(1))).toStrictEqual(result);
    })
});

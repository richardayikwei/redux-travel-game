
import travelerReducer, { buy } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState} from "./test-data/testStatesData";


describe(' buy traveler reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, buy(-1))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, buy(0))).toBe(initialState);
    });
    test('should return intialState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, buy(1))).toBe(zeroReputationState);
    });
    test('should return intialState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, buy(1))).toBe(negativeReputationState);
    });
    test('should return intialState without any changes if payload is greater than cash', () => {
        expect(travelerReducer(initialState, buy(101))).toBe(initialState);
    });
    test('should update supplies and cash if reputation is not less than or equal to zero and cash is not less than or equal to zero', () => {
        const result = {
            cash: 99,
            days: 0,
            supplies: 2,
            fatigue: 0,
            disrepair: 0,
            reputation: 100,
            distance: 0
        };
        expect(travelerReducer(initialState, buy(1))).toStrictEqual(result);
    });
});

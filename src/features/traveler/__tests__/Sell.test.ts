import travelerReducer, { sell } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, suppliesState } from "./test-data/testStatesData";



describe('sell travel reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, sell(-1))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, sell(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, sell(1))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, sell(1))).toBe(negativeReputationState);
    });
    test('should return initialState without any changes if payload is greater than supplies', () => {
        expect(travelerReducer(initialState, sell(1))).toBe(initialState);
    });
    test('should update supplies and cash if reputation is not less than or equal to zero and supplies are not less than payload', () => {
        const result = {
            cash: 100.5,
            days: 1,
            supplies: 7,
            fatigue: 3,
            disrepair: 8,
            reputation: 100,
            distance: 0
        }
        expect(travelerReducer(suppliesState, sell(1))).toStrictEqual(result);
    });
});

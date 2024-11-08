import travelerReducer, { gather } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, fatiguedState, } from "../data/testStatesData";



describe('gather travel reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, gather(-1))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, gather(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, gather(1))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, gather(1))).toBe(negativeReputationState);
    });
    test('should return fatiguedState without any changes if energy required to gather exceeds maximum fatigue level of 100', () => {
        expect(travelerReducer(fatiguedState, gather(1))).toBe(fatiguedState);
    });
    test('should update supplies, fatigue and days if reputation is not less than or equal to zero and fatigue levels do not exceed 100 after gathering', () => {
        const result = {
            cash: 100,
            days: 1,
            supplies: 3,
            fatigue: 2,
            disrepair: 0,
            reputation: 100,
        }
        expect(travelerReducer(initialState, gather(1))).toStrictEqual(result);
    });
});

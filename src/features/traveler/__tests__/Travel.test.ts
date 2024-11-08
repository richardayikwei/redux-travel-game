import travelerReducer, { travel } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, fatiguedState, disrepairState, suppliesState } from "./test-data/testStatesData";



describe('travel reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, travel(-11))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, travel(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, travel(2))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, travel(3))).toBe(negativeReputationState);
    });
    test('should return initialState without any changes if payload is greater than supplies', () => {
        expect(travelerReducer(initialState, travel(6))).toBe(initialState);
    });
    test('should return fatiguedState without any changes if payload is less than supplies  and fatigue is greater than or equal to 100', () => {
        expect(travelerReducer(fatiguedState, travel(9))).toBe(fatiguedState);
    });
    test('should return disrepairState without any changes if disrepair is greater than or equal to 100', () => {
        expect(travelerReducer(disrepairState, travel(14))).toBe(disrepairState);
    });
    test('should update supplies, days, fatigue and disrepair if reputation is not less than or equal to zero and supplies are not less than payload', () => {
        const result = {
            cash: 100,
            days: 2,
            supplies: 2,
            fatigue: 4,
            disrepair: 11,
            reputation: 100,
        }
        expect(travelerReducer(suppliesState, travel(1))).toStrictEqual(result);
    });
});

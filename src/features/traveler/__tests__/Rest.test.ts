import travelerReducer, { rest } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, restedState, disrepairState, suppliesState } from "./test-data/testStatesData";



describe('rest reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, rest(-11))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, rest(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, rest(2))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, rest(3))).toBe(negativeReputationState);
    });
    test('should return initialState without any changes if payload is greater than supplies', () => {
        expect(travelerReducer(initialState, rest(6))).toBe(initialState);
    });
    test('should return restedState without any changes if fatigue is less than or equal to 100', () => {
        expect(travelerReducer(restedState, rest(1))).toBe(restedState);
    });
    test('should update supplies, days, fatigue and disrepair if reputation is not less than or equal to zero and supplies are not less than payload', () => {
        const result = {
            cash: 100,
            days: 2,
            supplies: 4,
            fatigue: 2,
            disrepair: 8,
            reputation: 100,
        }
        expect(travelerReducer(suppliesState, rest(1))).toStrictEqual(result);
    });
});

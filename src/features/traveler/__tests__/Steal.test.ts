import travelerReducer, { steal } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, suppliesState } from "./test-data/testStatesData";



describe('steal reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, steal(-11))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, steal(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, steal(2))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, steal(3))).toBe(negativeReputationState);
    });
    test('should return initialState without any changes if payload is greater than reputation', () => {
        expect(travelerReducer(initialState, steal(100))).toBe(initialState);
    });
    test('should update supplies, days and reputation if reputation is not less than or equal to zero', () => {
        const result = {
            cash: 100,
            days: 2,
            supplies: 12,
            fatigue: 3,
            disrepair: 8,
            reputation: 80,
        }
        expect(travelerReducer(suppliesState, steal(1))).toStrictEqual(result);
    });
});

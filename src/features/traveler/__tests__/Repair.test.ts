import travelerReducer, {
    repair,
    steal,
    reset,
} from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, zeroReputationState, negativeReputationState, suppliesState, repairedState, fatiguedState } from "./test-data/testStatesData";



describe('repair reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(initialState, repair(-11))).toBe(initialState);
    });
    test('should return intialState without any changes if payload is a zero', () => {
        expect(travelerReducer(initialState, repair(0))).toBe(initialState);
    });
    test('should return zeroReputationState without any changes if reputation is a zero', () => {
        expect(travelerReducer(zeroReputationState, repair(2))).toBe(zeroReputationState);
    });
    test('should return negativeReputationState without any changes if reputation is a negative number', () => {
        expect(travelerReducer(negativeReputationState, repair(3))).toBe(negativeReputationState);
    });
    test('should return repairedState without any changes if repairedState is less than or equal to 0', () => {
        expect(travelerReducer(repairedState, repair(1))).toBe(repairedState);
    });
    test('should return suppliesState without any changes if suppliesState is less than payload', () => {
        expect(travelerReducer(suppliesState, repair(8))).toBe(suppliesState);
    });
    test('should return fatiguedState without any changes if fatigue is greater than 100', () => {
        expect(travelerReducer(fatiguedState, repair(1))).toBe(fatiguedState);
    });
    test('should return repairedState without any changes if repairedState is less than or equal to 0', () => {
        expect(travelerReducer(repairedState, repair(1))).toBe(repairedState);
    });
    test('should update supplies, days, fatigue and disrepair if reputation is not less than or equal to zero and supplies are not less than payload', () => {
        const result = {
            cash: 100,
            days: 2,
            supplies: 0,
            fatigue: 4,
            disrepair: 0,
            reputation: 100,
        }
        expect(travelerReducer(suppliesState, repair(1))).toStrictEqual(result);
    });
});

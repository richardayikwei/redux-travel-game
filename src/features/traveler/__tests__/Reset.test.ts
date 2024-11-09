import travelerReducer, { reset } from "../travelerSlice";
import '@testing-library/jest-dom';
import { initialState, suppliesState } from "./test-data/testStatesData";



describe('reset reducer', () => {
    test('should return intialState without any changes if payload is a negative number', () => {
        expect(travelerReducer(suppliesState, reset())).toStrictEqual(initialState);
    });
});

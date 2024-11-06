import { configureStore } from '@reduxjs/toolkit'
import travelerReducer from '../features/traveler/travelerSlice'

export default configureStore({
    reducer: {
        traveler: travelerReducer
    },
});
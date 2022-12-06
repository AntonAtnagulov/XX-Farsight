import { createSlice } from '@reduxjs/toolkit';

const rtkSlice = createSlice({
    name: 'rtkSlice',
    initialState: {
        spinner: 'visible'
    },
    reducers: {
        spinnerOff(state) {
           state.spinner = 'hidden'
        }
    }
});

export default rtkSlice.reducer
export const {spinnerOff} = rtkSlice.actions
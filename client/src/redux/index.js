import {combineReducers, configureStore} from '@reduxjs/toolkit'
// import rtkReducer from './rtkReducer'
import rtkSlice from './rtkSlice'

const rootReducer = combineReducers({
    toolkit: rtkSlice,   // или rtkReducer для обычного редьюсера rtk
})

export const store = configureStore({
    reducer: rootReducer,
})
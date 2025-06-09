import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++; // we are allowed to do this here because toolkit creates a clone of the state
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
    // For multiple reducers:
    // reducer: {
    //     counter: counterSlice.reducer,
    //     //...more reducers
    // }
});

export const counterActions = counterSlice.actions;
export default store;
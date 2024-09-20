import { createSlice } from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/Counter';

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;

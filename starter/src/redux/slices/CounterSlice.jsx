import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter", //name of slice
  initialState, //initial state
  reducers: {
    //reducers containing objects with functions to modify state
    increment: (newVal) => {
      newVal.value += 1; //hmre state ki  (state) value 1 se increment krdo
    },
    decrement: (newVal) => {
      newVal.value -= 1; //hmre state ki  (newVal) value 1 se decrement krdo
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

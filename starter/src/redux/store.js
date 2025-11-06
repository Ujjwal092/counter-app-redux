import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

//configureStore is used to create the redux store contains all the slices or centralized state of data
export const store = configureStore({
  reducer: {
    counter: CounterSlice, //key as slice name and value as slice reducer here we have only one slice
  },
});

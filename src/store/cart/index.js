import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    incrementDrink: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] + 1 : 1;
    },
    decrementDrink: (state, { payload }) => {
      state[payload] = state[payload] !== 0 ? state[payload] - 1 : 0;
    },
    // nullDrink: (state, { payload }) => {
    //   state[payload] = state[payload] === 0 ? null;
    // },
  },
});

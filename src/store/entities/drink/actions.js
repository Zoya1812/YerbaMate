import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { status } from "../../../constants/statuses";
import { loadDrinksThunk } from "./thunks/loadDrinksThunk";

export const drinksEntityAdapter = createEntityAdapter();

export const drinkSlice = createSlice({
    name: "drink",
    initialState: drinksEntityAdapter.getInitialState(
        {status: status.idle }),
    extraReducers: (build) => 
    build
    .addCase(loadDrinksThunk.pending, (state) => {
        state.status = status.pending;
    })
    .addCase(loadDrinksThunk.rejected, (state, { payload }) => {
        state.status = 
        payload === status.earlyLoaded
        ? status.success 
        : status.failed;
    })
    .addCase(loadDrinksThunk.fulfilled, (state, { payload }) => {
        drinksEntityAdapter.setAll(state, payload)
        state.ids = payload.map(({id}) => id);
        state.status = status.success;
    })
})

export const drinkAction = drinkSlice.actions;
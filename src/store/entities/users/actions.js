import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { status } from "../../../constants/statuses";
import { loadUsersThunk } from "./thunks/loadUsersThunk";

export const usersEntityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
    name: "user",
    initialState: usersEntityAdapter.getInitialState({status: status.idle }),
    extraReducers: (builder) => 
    builder
    .addCase(loadUsersThunk.pending, (state) => {
       state.status = status.pending;
    })
    .addCase(loadUsersThunk.fulfilled, (state, {payload}) => {
        usersEntityAdapter.setAll(state, payload)
        state.ids = payload.map(({id}) => id);
       state.status = status.success;
    })
    .addCase(loadUsersThunk.rejected, (state, {payload}) => {
        state.status = 
         payload === status.earlyLoaded
         ? status.success 
         : status.failed;
     })
})
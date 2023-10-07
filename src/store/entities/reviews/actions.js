import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { status } from "../../../constants/statuses";
import { loadReviewsThunk } from "./thunk/loadReviewsThunk";

export const reviewEntityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: reviewEntityAdapter.getInitialState({status: status.idle }),
    extraReducers: (build) => 
    build
    .addCase(loadReviewsThunk.pending, (state) => {
        state.status = status.pending;
    })
    .addCase(loadReviewsThunk.fulfilled, (state, {payload}) => {
        if (payload?.length) {
        reviewEntityAdapter.upsertMany(state, payload);
        }
        state.status = status.success;
    })
    .addCase(loadReviewsThunk.rejected, (state, {payload}) => {
        state.status = 
        payload === status.earlyLoaded
        ? status.success 
        : status.failed;
    })

})
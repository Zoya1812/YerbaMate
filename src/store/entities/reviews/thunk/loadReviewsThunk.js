import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDrinkReviewsById } from "../../drink/selectors";
import { status } from "../../../../constants/statuses";
import { selectReviewIds } from "../selectors";

export const loadReviewsThunk = createAsyncThunk(
'review',
async(drinkId, {getState, rejectWithValue}) => {

const state = getState();
const drinkReviewsIds = selectDrinkReviewsById(state, {drinkId})
const loadedReviewIds = selectReviewIds(state);

if(drinkReviewsIds.every((drinkReviewId) => 
loadedReviewIds.includes(drinkReviewId))){
    return rejectWithValue(status.earlyLoaded)
}

const response = await fetch(
    `http://localhost:3009/api/reviews?drinkId=${drinkId}/`);
return await response.json()

})
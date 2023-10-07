import { createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "../../../../constants/statuses";
import { selectDrinkIds } from "../selectors";

export const loadDrinksThunk = createAsyncThunk(
    "drink",
    async (_, {getState, rejectWithValue}) => {
        const drinkIds = selectDrinkIds(getState());

    if(drinkIds.length) {
        return rejectWithValue(status.earlyLoaded)
    }

    const response = await fetch("http://localhost:3009/api/drinks/");
    return await response.json()
}) 
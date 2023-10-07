import { createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "../../../../constants/statuses";
import { selectUserIds } from "../selectors";

export const loadUsersThunk = createAsyncThunk(
"user",
async(_, {getState, rejectWithValue}) => {
    const usersIds = selectUserIds(getState());

if(usersIds.length) {
    return rejectWithValue(status.earlyLoaded)
}

const response = await fetch("http://localhost:3009/api/users/");
return await response.json()
})
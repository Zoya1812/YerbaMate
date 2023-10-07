import { combineReducers } from "redux"
import { drinkSlice } from "./entities/drink/actions"
import { cartSlice } from "./cart"
import { usersSlice } from "./entities/users/actions"
import { reviewsSlice } from "./entities/reviews/actions"
import { configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
cart: cartSlice.reducer,
drink: drinkSlice.reducer,
user: usersSlice.reducer,
review: reviewsSlice.reducer,
})

export const store = configureStore({
reducer: rootReducer, 
})

console.log('state', store.getState())
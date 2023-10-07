import { createSelector } from "@reduxjs/toolkit";
import { status } from "../../../constants/statuses";

export const selectDrinkModule = (state) => state.drink;

export const selectDrinkById = (state, {drinkId}) => 
        selectDrinkModule(state).entities[drinkId];

export const selectDrinks = (state) => 
        Object.values(selectDrinkModule(state).entities)

export const selectDrinkIds = (state) => selectDrinkModule(state).ids;

export const selectDrinkReviewsById = (state, {drinkId}) => 
selectDrinkById(state, {drinkId})?.reviews;

export const selectPriceByDrink = (state, {drinkId}) => 
selectDrinkById(state, {drinkId})?.price;

export const selectDrinkIsLoading = (state) => 
selectDrinkModule(state).status === status.pending;

export const selectDrinkIsLoaded = (state) =>
selectDrinkModule(state).status === status.success;

export const selectDrinkCount = (state, {drinkId}) => 
selectDrinkModule(state).entities[drinkId]

export const selectDrinkEntities = (state) =>
  selectDrinkModule(state).entities;

export const selectDrinksFilteredByName = createSelector(
        [selectDrinkEntities, (_, { searchValue }) => searchValue],
        (entities, searchValue) => {
          return Object.values(entities).filter(
            ({ taste }) => taste.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          );
        }
      );
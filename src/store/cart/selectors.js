export const selectCartModule = (state) => state.cart;

export const selectDrinkCount = (state, { drinkId }) =>
  selectCartModule(state)[drinkId] || 0;

export const selectCartIds = (state) => 
  Object.keys(selectCartModule(state));

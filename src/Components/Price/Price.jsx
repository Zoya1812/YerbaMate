import React from 'react'
import { useSelector } from 'react-redux';
import { selectPriceByDrink } from '../../store/entities/drink/selectors';
import { selectDrinkCount } from '../../store/cart/selectors';

export const Price = ({drinkId}) => {
  const price = useSelector((state) => selectPriceByDrink(state, {drinkId})) || 0;

  return (
    <div>
        <h2>{price}</h2>      
    </div>
  )
}

import React from 'react'
import styles from "./styles.module.css"
import { cartSlice } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { selectDrinkCount } from '../../store/cart/selectors'
import { selectPriceByDrink } from '../../store/entities/drink/selectors'
import { Button } from '@mui/material'

export const MakeOrderButton = ({drinkId}) => {

const dispatch = useDispatch()
const count = useSelector((state) => selectDrinkCount(state, { drinkId }));
const decrement = () => dispatch(cartSlice.actions.decrementDrink(drinkId));
const increment = () => dispatch(cartSlice.actions.incrementDrink(drinkId));

//  const finalPrice = price * count;
return (
<div>
    <div className={styles.root}>
        {/* {finalPrice} */}
        <div className={styles.buttons}>
            <Button variant='contained' color='inherit' size='small' onClick={increment} disabled={count === 30}>+</Button>
            {count}
            <Button variant='contained' color='inherit' size='small'onClick={decrement} disabled={count === 0}>-</Button>
        </div>
    </div>
</div>
)}



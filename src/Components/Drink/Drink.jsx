import React from 'react'
import { useSelector } from 'react-redux';
import { selectDrinkById, selectPriceByDrink } from '../../store/entities/drink/selectors';
import styles from "./styles.module.css"
import { ProductName } from '../productName/productName';
import { FinalPrice, Price } from '../Price/Price';
import { MakeOrderButton } from '../MakeOrderButton/MakeOrderButton';
import { selectDrinkCount } from '../../store/cart/selectors';

export const Drink = ({ drinkId}) => {

  // orderedDrink
  const drink = useSelector((state) => selectDrinkById(state, { drinkId }))

  if(!drink){
      return null;
  } 

return (
<div className={styles.cartRoot}>
  <ProductName drink={drink} />
    <div className={styles.buttonPrice}>
      <Price drinkId={drinkId}/>
      <MakeOrderButton drinkId={drinkId} className={styles.makeOrderButton}/>
    </div>
</div>
)}


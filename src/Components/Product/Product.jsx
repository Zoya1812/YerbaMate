import React from 'react'
import { ProductName } from '../productName/productName';
import { Description } from '../Description/Description';
import styles from "./styles.module.css"
import { Price } from '../Price/Price';
import { selectDrinkById, selectDrinkCount } from '../../store/entities/drink/selectors';
import { useSelector } from 'react-redux';
import { MakeOrderButton } from '../MakeOrderButton/MakeOrderButton';
import { size } from '../Button/size';
import { types } from '../Button/types';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Product = () => {
const navigate = useNavigate()
const { drinkId } = useParams();
const drink = useSelector((state) => selectDrinkById(state, {drinkId}))
const count = useSelector((state) => selectDrinkCount(state, { drinkId }));

return (
<div className={styles.root}>
  <div className={styles.products}>    
    <ProductName drink={drink}/>
    <Description drink={drink} />
    <Price drinkId={drinkId}/>
    <MakeOrderButton drinkId={drinkId}/>
    <Button onClick={() => navigate('/cart', {replace: false})} 
        Size={size.l} Type={types.order}>MAKE AN ORDER</Button>
  </div>
</div>
)}
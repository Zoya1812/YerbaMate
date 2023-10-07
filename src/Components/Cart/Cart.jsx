import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectCartIds, selectDrinkCount } from "../../store/cart/selectors";
import { Drink } from "../Drink/Drink";

export const Cart = () => {
const cart = useSelector(selectCartIds);
// cart.forEach((id) =>  selectDrinkCount(state=>(state, {id})))

return (
<div className={styles.root}>
    <h1 className={styles.title}>Cart</h1>

    <div className={styles.drink}>
              {cart.map((drinkId) => (
            <Drink drinkId={drinkId}/>
            ))}
    </div>
</div>
)};

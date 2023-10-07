import React from "react";
import styles from "./styles.module.css"
import { Cart } from "../../Components/Cart/Cart";
import { FormPropsTextFields } from "../../Components/Form/Form";
import { useParams } from "react-router-dom";

export const CartPage = () => {

return (
<div>  
<div className={styles.root}>
    <FormPropsTextFields/>
    <Cart/>
</div>
</div> 
)}
 
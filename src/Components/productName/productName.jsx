import React from 'react'
import styles from "./styles.module.css"

export const ProductName = ({drink, className}) => {

  if(!drink){
    return null;
  }

const {name, taste} = drink;
   return (
    <div className={styles.ProductName}>
        <h3>{name}, {taste}</h3>
    </div>
  )
}




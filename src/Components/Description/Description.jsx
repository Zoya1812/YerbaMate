import React from 'react'
import styles from "./styles.module.css"

export const Description = ({drink, className}) => {

if(!drink){
  return null;
}
  const {description} = drink;

  return (
    <div className={styles.description}>
        {description}
    </div>
  )
}



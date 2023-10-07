import React from "react"
import styles from "./styles.module.css"

export const Image = ({image}) => {

const {src, name} = image;

return(
<div className={styles.root}>       
    <img src={src} alt={name}   />
</div>
)}
import { useSelector } from "react-redux"
import { selectDrinks } from "../../store/entities/drink/selectors"
import { Tabs } from "../Tabs/Tabs"
import React from "react"
import styles from "./styles.module.css"

export const DrinkTabs = () => {

const drinks = useSelector(selectDrinks)

return (
<div className={styles.tabs}>
    {drinks.map(({ taste, id }) => <Tabs taste={taste} to={id}/>)}
</div>
)}

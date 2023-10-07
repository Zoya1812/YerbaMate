import React from "react"
import { Button } from "../Button/Button"
import { types } from "../Button/types"
import styles from "./styles.module.css"
import { NavLink } from "react-router-dom"
import classNames from "classnames"

export const Tabs = ({ taste, to}) => {
return(
<NavLink to={to} className={classNames(styles.navLink)}>
    {({isActive}) => <Button disabled={isActive} Type={types.list}> {taste} </Button>}
</NavLink>
)} 
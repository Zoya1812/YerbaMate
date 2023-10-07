import React from 'react'
import styles from "./styles.module.css"
import Icon from "../../Content/Icons/photo_2023-08-18_17-41-50 (1).svg"
import { Link } from 'react-router-dom'

export const Header = () => {
return (
  <header className={styles.header}>
      <Link to="/drinks/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2" className={styles.logo}>
      <img src={Icon}  ></img>
      </Link>
      <div className={styles.links}>
        <Link to="/drinks/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2" className={styles.link}>Mate</Link>
        <Link to="/cart" className={styles.link}>Cart</Link>
      </div>
  </header>
)
}

